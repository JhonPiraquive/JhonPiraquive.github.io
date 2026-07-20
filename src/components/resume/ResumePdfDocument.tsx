import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumePdfExperienceJob } from "@/components/resume/ResumePdfExperienceJob";
import type { PortfolioContent } from "@/lib/portfolio";
import { getExperienceYears } from "@/lib/profile-stats";
import { interpolate } from "@/lib/portfolio";

type ResumePdfDocumentProps = {
  content: PortfolioContent;
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 36,
    fontFamily: "Helvetica",
    fontSize: 8,
    color: "#000000",
    lineHeight: 1.3,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    marginBottom: 2,
  },
  role: {
    fontSize: 9,
    marginBottom: 3,
  },
  contact: {
    fontSize: 7.5,
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginTop: 8,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    textTransform: "uppercase",
  },
  paragraph: {
    marginBottom: 3,
  },
  meta: {
    fontSize: 7.5,
    marginBottom: 4,
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 2,
  },
  eduLeft: {
    flex: 1,
  },
  eduDegree: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
  },
  eduSchool: {
    fontSize: 7.5,
  },
  eduPeriod: {
    fontSize: 7.5,
    textAlign: "right",
  },
  certLine: {
    marginBottom: 1,
  },
});

export function ResumePdfDocument({ content }: ResumePdfDocumentProps) {
  const labels = content.resumePdf;
  const years = getExperienceYears();
  const summary = interpolate(content.about.summary, { expYears: years });
  const languages = content.about.languages
    .map((l) => `${l.name} (${l.level})`)
    .join(" | ");
  const contact = [
    content.social.website,
    content.social.linkedin,
    content.social.github,
  ].join(" | ");

  return (
    <Document
      title={`${content.brand.name} - ${labels.documentTitle}`}
      author={content.brand.name}
      subject={labels.documentTitle}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{content.brand.name}</Text>
        <Text style={styles.role}>{content.about.role}</Text>
        <Text style={styles.contact}>{contact}</Text>

        <Text style={styles.sectionTitle}>{labels.profile}</Text>
        <Text style={styles.paragraph}>{summary}</Text>
        <Text style={styles.meta}>
          {labels.languages}: {languages}
        </Text>

        <Text style={styles.sectionTitle}>{labels.experience}</Text>
        {content.experience.map((job) => (
          <ResumePdfExperienceJob
            key={`${job.company}-${job.period}`}
            job={job}
            projectsLabel={labels.projects}
          />
        ))}

        <Text style={styles.sectionTitle}>{labels.education}</Text>
        {content.education.map((item) => (
          <View key={`${item.degree}-${item.period}`} style={styles.eduRow} wrap={false}>
            <View style={styles.eduLeft}>
              <Text style={styles.eduDegree}>{item.degree}</Text>
              <Text style={styles.eduSchool}>{item.school}</Text>
            </View>
            <Text style={styles.eduPeriod}>{item.period}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{labels.certifications}</Text>
        {content.certifications.map((cert) => (
          <Text key={cert.title} style={styles.certLine}>
            • {cert.title}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
