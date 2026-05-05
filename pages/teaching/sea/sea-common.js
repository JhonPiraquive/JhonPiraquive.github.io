(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length <= 1) return;
      var t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  if (typeof hljs !== "undefined") {
    hljs.highlightAll();
  }

  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      themeVariables: {
        darkMode: true,
      },
    });
    var nodes = document.querySelectorAll(".mermaid");
    if (nodes.length) {
      if (reduced) {
        mermaid.initialize({ theme: "dark", startOnLoad: false });
      }
      mermaid.run({ nodes: nodes });
    }
  }

  /* --- Interactive mini-quiz (SEA lessons) --- */
  var VF_RE = /^\s*V\/F\s*[:\.]?/i;

  function isMiniQuizHeading(el) {
    if (!el || (el.tagName !== "H2" && el.tagName !== "H3")) return false;
    var id = el.getAttribute("id") || "";
    if (/^mini-quiz/i.test(id)) return true;
    var t = (el.textContent || "").trim().toLowerCase();
    return t.indexOf("mini-quiz") !== -1;
  }

  function parseAnswerMap(pEl) {
    var raw = (pEl.textContent || "").replace(/^[\s\S]*?:\s*/, "").trim();
    var map = {};
    var re = /\(\s*(\d+)\s*\)\s*(.*?)(?=\s*,\s*\(\s*\d+\s*\)|\s*$)/g;
    var m;
    while ((m = re.exec(raw)) !== null) {
      map[parseInt(m[1], 10)] = m[2].trim().replace(/\s+$/, "");
    }
    return map;
  }

  function isVFQuestion(text) {
    return VF_RE.test(text);
  }

  function normalizeExpected(kind, raw) {
    var s = (raw || "").trim().replace(/\.*$/, "");
    if (kind === "vf") {
      var u = s.toUpperCase();
      if (u.indexOf("VERD") === 0 || u === "V" || u === "✓") return "V";
      if (u.indexOf("FALS") === 0 || u === "F") return "F";
      return u.charAt(0);
    }
    if (kind === "mcq") {
      var letter = s.match(/^([A-Z])\b/i);
      return letter ? letter[1].toUpperCase() : s.toUpperCase();
    }
    return s.trim();
  }

  function extractLetterFromOption(innerHTML) {
    var m = (innerHTML || "").match(/^\s*([A-Z])\)\s*/i);
    return m ? m[1].toUpperCase() : "";
  }

  function collectQuizBlock(heading) {
    var els = [];
    var n = heading.nextSibling;
    while (n) {
      if (n.nodeType === 3) {
        n = n.nextSibling;
        continue;
      }
      if (n.nodeType !== 1) break;
      var tag = n.tagName;
      if (tag === "HR") break;
      if (tag === "H2") break;
      if (tag === "H3" && heading.tagName === "H3") break;
      if (tag === "OL" || tag === "UL") {
        els.push(n);
        n = n.nextSibling;
        continue;
      }
      if (tag === "P") {
        var txt = n.textContent || "";
        if (/respuestas/i.test(txt)) {
          els.push(n);
          break;
        }
      }
      break;
    }
    return els;
  }

  function buildQuestionModel(blockEls) {
    var flat = [];
    var uls = [];
    var i;
    var ol;
    var lis;
    var k;
    for (i = 0; i < blockEls.length; i++) {
      var el = blockEls[i];
      if (el.tagName === "OL") {
        ol = el.querySelectorAll(":scope > li");
        for (k = 0; k < ol.length; k++) {
          flat.push({
            html: ol[k].innerHTML.trim(),
            text: ol[k].textContent.trim(),
          });
        }
      } else if (el.tagName === "UL") {
        uls.push(el);
      }
    }
    var ulIdx = 0;
    var questions = [];
    for (k = 0; k < flat.length; k++) {
      var item = flat[k];
      if (isVFQuestion(item.text)) {
        questions.push({ kind: "vf", html: item.html, text: item.text });
      } else {
        var ul = uls[ulIdx++];
        if (!ul) {
          questions.push({ kind: "text", html: item.html, text: item.text });
        } else {
          var opts = [];
          var oli = ul.querySelectorAll(":scope > li");
          for (i = 0; i < oli.length; i++) {
            opts.push({
              html: oli[i].innerHTML.trim(),
              letter: extractLetterFromOption(oli[i].innerHTML),
            });
          }
          questions.push({
            kind: "mcq",
            html: item.html,
            text: item.text,
            options: opts,
          });
        }
      }
    }
    return { questions: questions, answerParagraph: blockEls[blockEls.length - 1] };
  }

  function enhanceOneQuiz(heading, quizCounter) {
    if (heading.getAttribute("data-sea-quiz") === "1") return;
    var block = collectQuizBlock(heading);
    if (block.length < 2) return;
    var last = block[block.length - 1];
    if (!last || last.tagName !== "P" || !/respuestas/i.test(last.textContent || "")) {
      return;
    }
    var model = buildQuestionModel(block);
    if (!model.questions.length) return;

    var answerMap = parseAnswerMap(model.answerParagraph);
    var qid = heading.id || "sea-quiz-" + quizCounter;

    var wrap = document.createElement("div");
    wrap.className = "sea-quiz";
    wrap.setAttribute("data-sea-quiz-root", qid);

    var toolbar = document.createElement("div");
    toolbar.className = "sea-quiz-toolbar";
    var scoreEl = document.createElement("span");
    scoreEl.className = "sea-quiz-score";
    scoreEl.setAttribute("aria-live", "polite");
    var btnRow = document.createElement("div");
    btnRow.className = "sea-quiz-actions";
    var btnCheck = document.createElement("button");
    btnCheck.type = "button";
    btnCheck.className = "sea-quiz-btn sea-quiz-btn-primary";
    btnCheck.textContent = "Comprobar todo";
    var btnReset = document.createElement("button");
    btnReset.type = "button";
    btnReset.className = "sea-quiz-btn sea-quiz-btn-ghost";
    btnReset.textContent = "Reiniciar";
    btnRow.appendChild(btnCheck);
    btnRow.appendChild(btnReset);
    toolbar.appendChild(scoreEl);
    toolbar.appendChild(btnRow);

    var listWrap = document.createElement("div");
    listWrap.className = "sea-quiz-questions";

    var states = [];

    function setScore() {
      var answered = 0;
      var correct = 0;
      var j;
      for (j = 0; j < states.length; j++) {
        if (states[j].answered) {
          answered++;
          if (states[j].correct) correct++;
        }
      }
      scoreEl.textContent =
        answered === 0
          ? model.questions.length +
            " pregunta" +
            (model.questions.length !== 1 ? "s" : "") +
            " · elige y comprueba"
          : correct +
            "/" +
            model.questions.length +
            " correctas" +
            (answered < model.questions.length
              ? " · " + (model.questions.length - answered) + " sin responder"
              : "");
    }

    function evaluateIndex(idx, silent) {
      var st = states[idx];
      var q = model.questions[idx];
      var expectedRaw = answerMap[idx + 1];
      if (expectedRaw === undefined) return;
      var expectedKind = q.kind === "vf" ? "vf" : q.kind === "mcq" ? "mcq" : "text";
      var expected = normalizeExpected(expectedKind, expectedRaw);
      var got = "";
      var field = st.field;
      var fb = st.feedback;
      if (q.kind === "vf") {
        got = st.vfSelected || "";
      } else if (q.kind === "mcq") {
        var chk = field.querySelector("input:checked");
        got = chk ? chk.value : "";
      } else {
        var inp = field.querySelector("input[type=text]");
        got = (inp && inp.value) || "";
      }
      if (!got && q.kind === "text") {
        st.answered = false;
        if (!silent) fb.textContent = "";
        field.classList.remove("sea-quiz-q--ok", "sea-quiz-q--bad");
        return;
      }
      if (!got && q.kind !== "text") {
        st.answered = false;
        if (!silent) {
          fb.textContent =
            q.kind === "vf"
              ? "Elige Verdadero o Falso."
              : "Selecciona una opción.";
          field.classList.remove("sea-quiz-q--ok");
          field.classList.add("sea-quiz-q--bad");
        }
        return;
      }
      var ok = false;
      if (q.kind === "text") {
        ok =
          got.trim().toUpperCase() === expected.toUpperCase() ||
          got.trim().toLowerCase() === expected.toLowerCase();
      } else if (q.kind === "mcq") {
        ok = got === expected;
      } else {
        ok = got === expected;
      }
      st.answered = !!got;
      st.correct = ok;
      field.classList.remove("sea-quiz-q--ok", "sea-quiz-q--bad");
      field.classList.add(ok ? "sea-quiz-q--ok" : "sea-quiz-q--bad");
      if (!silent) {
        fb.textContent = ok ? "Correcto." : "Revisa la opción o el texto esperado.";
      }
      setScore();
    }

    function evaluateAll(silent) {
      var idx;
      for (idx = 0; idx < states.length; idx++) {
        evaluateIndex(idx, silent);
      }
    }

    for (var iq = 0; iq < model.questions.length; iq++) {
      (function (idx) {
        var q = model.questions[idx];
        var field = document.createElement("fieldset");
        field.className = "sea-quiz-q";
        field.setAttribute("data-q-index", String(idx));

        var leg = document.createElement("legend");
        leg.innerHTML =
          '<span class="sea-quiz-num">' +
          (idx + 1) +
          '</span><span class="sea-quiz-qtext">' +
          q.html +
          "</span>";

        var controls = document.createElement("div");
        controls.className = "sea-quiz-controls";

        var fb = document.createElement("p");
        fb.className = "sea-quiz-feedback";
        fb.setAttribute("aria-live", "polite");

        var state = {
          field: field,
          feedback: fb,
          vfSelected: "",
          answered: false,
          correct: false,
        };
        states.push(state);

        var nameMcq = qid + "-q" + idx;

        if (q.kind === "vf") {
          var vfRow = document.createElement("div");
          vfRow.className = "sea-quiz-vf";
          ["V", "F"].forEach(function (letter) {
            var b = document.createElement("button");
            b.type = "button";
            b.className = "sea-quiz-chip";
            b.textContent = letter === "V" ? "Verdadero" : "Falso";
            b.setAttribute("aria-pressed", "false");
            b.addEventListener("click", function () {
              vfRow.querySelectorAll(".sea-quiz-chip").forEach(function (x) {
                x.classList.remove("sea-quiz-chip--sel");
                x.setAttribute("aria-pressed", "false");
              });
              b.classList.add("sea-quiz-chip--sel");
              b.setAttribute("aria-pressed", "true");
              state.vfSelected = letter;
              evaluateIndex(idx, false);
            });
            vfRow.appendChild(b);
          });
          controls.appendChild(vfRow);
        } else if (q.kind === "mcq") {
          q.options.forEach(function (opt, oi) {
            var row = document.createElement("label");
            row.className = "sea-quiz-opt";
            var inp = document.createElement("input");
            inp.type = "radio";
            inp.name = nameMcq;
            inp.value = opt.letter || String.fromCharCode(65 + oi);
            inp.addEventListener("change", function () {
              evaluateIndex(idx, false);
            });
            var span = document.createElement("span");
            span.className = "sea-quiz-opt-body";
            span.innerHTML = opt.html;
            row.appendChild(inp);
            row.appendChild(span);
            controls.appendChild(row);
          });
        } else {
          var tin = document.createElement("input");
          tin.type = "text";
          tin.className = "sea-quiz-text-input";
          tin.setAttribute("autocomplete", "off");
          tin.setAttribute("placeholder", "Escribe tu respuesta…");
          tin.addEventListener("keydown", function (ev) {
            if (ev.key === "Enter") {
              evaluateIndex(idx, false);
            }
          });
          tin.addEventListener("blur", function () {
            evaluateIndex(idx, false);
          });
          controls.appendChild(tin);
        }

        field.appendChild(leg);
        field.appendChild(controls);
        field.appendChild(fb);
        listWrap.appendChild(field);
      })(iq);
    }

    var details = document.createElement("details");
    details.className = "sea-quiz-key";
    var summ = document.createElement("summary");
    summ.textContent = "Ver clave de respuestas (texto)";
    var keyClone = model.answerParagraph.cloneNode(true);
    keyClone.classList.add("sea-quiz-key-plain");
    details.appendChild(summ);
    details.appendChild(keyClone);

    wrap.appendChild(toolbar);
    wrap.appendChild(listWrap);
    wrap.appendChild(details);

    btnCheck.addEventListener("click", function () {
      evaluateAll(false);
    });
    btnReset.addEventListener("click", function () {
      states.forEach(function (st, si) {
        st.vfSelected = "";
        st.answered = false;
        st.correct = false;
        st.feedback.textContent = "";
        st.field.classList.remove("sea-quiz-q--ok", "sea-quiz-q--bad");
        var qq = model.questions[si];
        if (qq.kind === "mcq") {
          var r = st.field.querySelectorAll('input[type="radio"]');
          r.forEach(function (x) {
            x.checked = false;
          });
        } else if (qq.kind === "vf") {
          st.field.querySelectorAll(".sea-quiz-chip").forEach(function (x) {
            x.classList.remove("sea-quiz-chip--sel");
            x.setAttribute("aria-pressed", "false");
          });
        } else {
          var ti = st.field.querySelector("input[type=text]");
          if (ti) ti.value = "";
        }
      });
      setScore();
    });

    heading.setAttribute("data-sea-quiz", "1");
    heading.parentNode.insertBefore(wrap, heading.nextSibling);

    var j;
    for (j = 0; j < block.length; j++) {
      block[j].parentNode.removeChild(block[j]);
    }

    setScore();
  }

  function initMiniQuizzes() {
    var root = document.querySelector(".sea-content");
    if (!root) return;
    var heads = root.querySelectorAll('h2[id^="mini-quiz"], h3[id^="mini-quiz"]');
    var c = 0;
    heads.forEach(function (h) {
      if (!isMiniQuizHeading(h)) return;
      enhanceOneQuiz(h, c++);
    });
  }

  initMiniQuizzes();
})();
