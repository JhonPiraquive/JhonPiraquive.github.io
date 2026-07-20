import { Text, View, StyleSheet } from "@react-pdf/renderer";
import type { PortfolioContent } from "@/lib/portfolio";

type ExperienceItem = PortfolioContent["experience"][number];

type ResumePdfExperienceJobProps = {
  job: ExperienceItem;
  projectsLabel: string;
};

const styles = StyleSheet.create({
  jobBlock: {
    marginTop: 5,
    marginBottom: 2,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    flex: 1,
  },
  jobPeriod: {
    fontSize: 7.5,
    textAlign: "right",
  },
  jobCompany: {
    fontSize: 7.5,
    marginBottom: 2,
  },
  intro: {
    marginBottom: 2,
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 1,
  },
  timelineTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    marginTop: 3,
    marginBottom: 2,
  },
  roleBlock: {
    marginTop: 3,
    marginLeft: 4,
    marginBottom: 2,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  roleLevel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    flex: 1,
  },
  rolePeriod: {
    fontSize: 7.5,
    textAlign: "right",
  },
  roleProjects: {
    fontSize: 7.5,
    marginBottom: 1,
  },
  roleSummary: {
    marginBottom: 1,
  },
});

export function ResumePdfExperienceJob({ job, projectsLabel }: ResumePdfExperienceJobProps) {
  const timeline = job.roleTimeline;

  return (
    <View style={styles.jobBlock}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.jobPeriod}>{job.period}</Text>
      </View>
      <Text style={styles.jobCompany}>
        {job.company} - {job.location}
      </Text>

      {job.intro ? <Text style={styles.intro}>{job.intro}</Text> : null}

      {job.bullets.map((bullet) => (
        <Text key={bullet} style={styles.bullet}>
          • {bullet}
        </Text>
      ))}

      {timeline ? (
        <View>
          <Text style={styles.timelineTitle}>{timeline.title}</Text>
          {timeline.roles.map((role) => (
            <View key={`${role.level}-${role.period}`} style={styles.roleBlock}>
              <View style={styles.roleHeader}>
                <Text style={styles.roleLevel}>
                  {role.level}
                  {role.current ? " *" : ""}
                </Text>
                <Text style={styles.rolePeriod}>{role.period}</Text>
              </View>
              {role.projects.length > 0 ? (
                <Text style={styles.roleProjects}>
                  {projectsLabel}: {role.projects.join(", ")}
                </Text>
              ) : null}
              {role.summary ? <Text style={styles.roleSummary}>{role.summary}</Text> : null}
              {role.responsibilities.map((item) => (
                <Text key={item} style={styles.bullet}>
                  • {item}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}
