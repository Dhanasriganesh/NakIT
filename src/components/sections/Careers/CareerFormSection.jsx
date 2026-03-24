import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const JOBS = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    department: "Data & AI",
    employmentType: "C2C",
    location: "Plano, TX | Mclean, VA | Richmond, TX (hybrid)",
    noOfOpenings: "1",
    salary: "Salary to be determined based on experience and skills.",
    postedBy: "Recruitment Team",
    startDate: "Immediate",
    endDate: "Open",
    address: "Plano, TX | Mclean, VA | Richmond, TX (hybrid)",
    duration: "12+ Months (possible extension)",
    positionSummary:
      "The Data Scientist will analyze complex datasets, build predictive models, and deliver data-driven solutions that improve business decision-making.",
    detailedDuties: [
      "Analyze large and complex datasets to identify trends and insights.",
      "Develop, test, and deploy machine learning models.",
      "Perform data cleaning, preprocessing, and feature engineering.",
      "Design and implement statistical models and algorithms.",
      "Collaborate with stakeholders to translate requirements into solutions.",
      "Build data pipelines and automate workflows.",
      "Create visualizations and dashboards.",
      "Work with big data technologies and cloud platforms.",
      "Evaluate and improve model performance.",
      "Document processes and methodologies.",
      "Stay updated with latest data science advancements.",
    ],
    minimumRequirements: [
      "Bachelor's or Master's degree in a relevant field.",
      "10+ years of experience in data science or analytics roles.",
      "Strong knowledge of machine learning and statistical modeling.",
      "Proficiency in Python or R.",
      "Experience with SQL and databases.",
      "Strong analytical and communication skills.",
    ],
    toolsAndTechnologies:
      "Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), R, SQL, Power BI/Tableau, Hadoop, Spark, AWS/Azure/GCP",
    benefits: "Not specified",
    eeo: "Equal Opportunity Employer.",
  },
  {
    id: "python-developer",
    title: "Python Developer",
    department: "Engineering",
    employmentType: "C2C",
    location: "Louisville, KY or Dallas, TX",
    noOfOpenings: "1",
    salary: "Salary not specified",
    postedBy: "Recruitment Team",
    startDate: "Immediate",
    endDate: "Open",
    address: "Louisville, KY or Dallas, TX",
    duration: "18 Months",
    positionSummary:
      "The Python Developer will design, develop, and maintain scalable Python applications, APIs, and backend systems in collaboration with cross-functional teams.",
    detailedDuties: [
      "Develop, test, and maintain Python-based applications and services.",
      "Design and implement RESTful APIs and backend systems.",
      "Write clean, efficient, and reusable code.",
      "Collaborate with front-end developers and other team members.",
      "Debug and resolve technical issues and performance bottlenecks.",
      "Work with databases and optimize queries.",
      "Integrate third-party services and APIs.",
      "Participate in code reviews and ensure best practices.",
      "Automate tasks and improve system efficiency.",
      "Document development processes and technical specifications.",
    ],
    minimumRequirements: [
      "Bachelor's or Master's degree in Computer Science or related field.",
      "10+ years of experience in Python development.",
      "Strong knowledge of Python frameworks (Django, Flask, FastAPI).",
      "Experience with REST APIs and microservices.",
      "Proficiency in SQL and database systems.",
      "Familiarity with version control (Git).",
      "Strong problem-solving and communication skills.",
    ],
    toolsAndTechnologies:
      "Python (Django, Flask, FastAPI), SQL (MySQL, PostgreSQL), Git/GitHub, Docker, Kubernetes, AWS/Azure/GCP, REST APIs",
    benefits: "Not specified",
    eeo: "Equal Opportunity Employer. All qualified applicants will receive consideration without regard to race, color, religion, sex, national origin, disability, or veteran status.",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Data & Analytics",
    employmentType: "C2C",
    location: "Irving, Texas",
    noOfOpenings: "1",
    salary: "Salary to be determined based on experience, skills, and industry standards.",
    postedBy: "Recruitment Team",
    startDate: "Immediate",
    endDate: "Open",
    address: "Irving, Texas",
    duration: "24 Months",
    positionSummary:
      "The Data Analyst will collect, analyze, and interpret large datasets to support strategic business decisions and data-driven initiatives.",
    detailedDuties: [
      "Act as a bridge between business stakeholders and technical teams for data requirements.",
      "Collect, clean, and analyze structured and unstructured data.",
      "Develop dashboards, reports, and KPI visualizations.",
      "Perform data validation and quality checks.",
      "Conduct exploratory data analysis to identify patterns and opportunities.",
      "Assist in designing and maintaining data models and warehousing solutions.",
      "Use SQL and ETL methods to extract and transform data.",
      "Support ad-hoc analysis and reporting requests.",
      "Collaborate with data engineers and IT teams to optimize pipelines.",
      "Prepare documentation for reports and methodologies.",
      "Provide data-driven recommendations to improve business performance.",
    ],
    minimumRequirements: [
      "Master's or Bachelor's degree in Computer Science, IT, Statistics, Mathematics, or related field.",
      "10+ years of experience in data analysis, business analysis, or related roles.",
      "Strong knowledge of data analysis and visualization techniques.",
      "Proficiency in SQL and database management.",
      "Experience in data cleaning, transformation, and statistical analysis.",
      "Good understanding of business processes and data interpretation.",
      "Strong analytical thinking, problem-solving, and communication skills.",
    ],
    toolsAndTechnologies:
      "SQL (MySQL, PostgreSQL, SQL Server), Excel/Google Sheets, Power BI, Tableau, Python/R, Data Warehousing platforms, ETL tools",
    benefits: "Not specified",
    eeo: "Equal Opportunity Employer. All qualified applicants will receive consideration without regard to race, color, religion, sex, national origin, disability, or veteran status.",
  },
  {
    id: "java-developer",
    title: "Java Developer",
    department: "Engineering",
    employmentType: "C2C (GC ONLY)",
    location: "Chicago, IL (Onsite)",
    noOfOpenings: "1",
    salary: "Salary not specified",
    postedBy: "Recruitment Team",
    startDate: "Immediate",
    endDate: "Open",
    address: "Chicago, IL (Onsite)",
    duration: "10 Months",
    positionSummary:
      "The Java Developer will design, develop, and maintain high-performance, secure enterprise applications with focus on backend systems, microservices, and cloud platforms.",
    detailedDuties: [
      "Design, develop, test, and maintain Java-based applications.",
      "Build scalable backend services using Java and Spring.",
      "Develop REST APIs and microservices architecture.",
      "Collaborate with business analysts and stakeholders on requirements.",
      "Write clean, maintainable, and efficient code.",
      "Perform code reviews and enforce engineering best practices.",
      "Debug and resolve application issues and bottlenecks.",
      "Work with databases for schema design and optimized queries.",
      "Integrate third-party services and external systems.",
      "Participate in Agile/Scrum ceremonies.",
      "Ensure application security, scalability, and reliability.",
      "Implement logging, monitoring, and alerting.",
      "Optimize applications for speed and scalability.",
      "Collaborate with DevOps teams on CI/CD implementation.",
      "Maintain documentation for code, APIs, and architecture.",
    ],
    minimumRequirements: [
      "Bachelor's or Master's degree in Computer Science, IT, or related field.",
      "10+ years of experience in Java development.",
      "Strong expertise in Core Java, OOP, and design patterns.",
      "Experience with Spring, Spring Boot, and Hibernate.",
      "Proficiency in REST APIs and microservices.",
      "Strong SQL and relational database experience.",
      "NoSQL experience (MongoDB, Cassandra) is a plus.",
      "Familiarity with Git and version control workflows.",
      "Experience with Docker, Kubernetes, and cloud platforms.",
      "Understanding of CI/CD and DevOps practices.",
      "Strong problem-solving and communication skills.",
    ],
    toolsAndTechnologies:
      "Java (JDK 8/11/17), Spring/Spring Boot/Hibernate, REST APIs, Microservices, SQL (MySQL/PostgreSQL/Oracle), MongoDB, Cassandra, Git, Maven, Gradle, Docker, Kubernetes, Jenkins, AWS/Azure/GCP",
    benefits: "Not specified",
    eeo: "Equal Opportunity Employer. All qualified applicants will receive consideration without regard to race, color, religion, sex, national origin, disability, or veteran status.",
  },
];

const STEPS = [
  { id: "roles", label: "Open Roles" },
  { id: "details", label: "Job Description" },
  { id: "form", label: "Application Form" },
];

const ApplicationFormSection = () => {
  const [view, setView] = useState("roles");
  const [selectedRoleId, setSelectedRoleId] = useState(JOBS[0].id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: JOBS[0].title,
    message: "",
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const selectedJob = useMemo(
    () => JOBS.find((job) => job.id === selectedRoleId) || JOBS[0],
    [selectedRoleId]
  );

  const getApiBaseUrl = () => import.meta.env.VITE_API_URL || "/api";

  const getCurrentStepIndex = () =>
    view === "roles" ? 0 : view === "details" ? 1 : 2;

  const goToDetails = (job) => {
    setSelectedRoleId(job.id);
    setFormData((prev) => ({ ...prev, role: job.title }));
    setSubmitStatus({ type: "", message: "" });
    setView("details");
  };

  const goToForm = () => {
    setFormData((prev) => ({ ...prev, role: selectedJob.title }));
    setSubmitStatus({ type: "", message: "" });
    setView("form");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const API_URL = getApiBaseUrl();
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("mobile", formData.mobile);
      payload.append("role", formData.role || selectedJob.title);
      payload.append("message", formData.message);
      if (file) payload.append("file", file);

      const response = await fetch(`${API_URL}/careers/apply`, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: "Server error. Please try again later." };
        }
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thanks! Your application has been sent successfully.",
        });
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          role: selectedJob.title,
          message: "",
        });
        setFile(null);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Unable to submit. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message || "Network error. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[-120px] h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-80px] h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto mb-8 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            Careers
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Join the team building practical AI solutions
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            Explore open roles, read full job descriptions, and submit your
            application in a guided flow.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-5xl grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const active = index === getCurrentStepIndex();
            const done = index < getCurrentStepIndex();
            return (
              <div
                key={step.id}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-white text-slate-900"
                    : done
                    ? "bg-sky-500/20 text-sky-200"
                    : "bg-transparent text-slate-300"
                }`}
              >
                {index + 1}. {step.label}
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {view === "roles" && (
            <motion.div
              key="roles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {JOBS.map((job) => (
                <article
                  key={job.id}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white p-6 shadow-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    {job.department}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>{job.employmentType}</p>
                    <p>{job.location}</p>
                    <p>{job.salary}</p>
                    <p>{job.noOfOpenings} opening(s)</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => goToDetails(job)}
                    className="mt-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Apply Now
                  </button>
                </article>
              ))}
            </motion.div>
          )}

          {view === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="mx-auto grid max-w-5xl gap-5 rounded-2xl border border-white/10 bg-white p-6 md:grid-cols-3 md:p-8"
            >
              <aside className="md:col-span-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  Job Details
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">Role:</span>{" "}
                    {selectedJob.title}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Type:</span>{" "}
                    {selectedJob.employmentType}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      Openings:
                    </span>{" "}
                    {selectedJob.noOfOpenings}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      Salary:
                    </span>{" "}
                    {selectedJob.salary}
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">
                      Location:
                    </span>{" "}
                    {selectedJob.address}
                  </li>
                </ul>
              </aside>

              <div className="space-y-5 md:col-span-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {selectedJob.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setView("roles")}
                    className="text-sm font-medium text-sky-700 hover:text-sky-900"
                  >
                    Back to roles
                  </button>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Position Summary
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {selectedJob.positionSummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Detailed Job Duties
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                    {selectedJob.detailedDuties.map((duty) => (
                      <li key={duty}>{duty}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Minimum Requirements
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                    {selectedJob.minimumRequirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">
                      Tools & Technologies:
                    </span>{" "}
                    {selectedJob.toolsAndTechnologies}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Benefits:
                    </span>{" "}
                    {selectedJob.benefits}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">EEO:</span>{" "}
                    {selectedJob.eeo}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={goToForm}
                  className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          )}

          {view === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white p-6 shadow-xl md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    Application Form
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                    {selectedJob.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setView("details")}
                  className="text-sm font-medium text-sky-700 hover:text-sky-900"
                >
                  Back to description
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Mobile Number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  />
                  <input
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="Role of Interest"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your experience and why you are interested in this role."
                  className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                />

                <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
                  <label
                    htmlFor="resume-file"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Resume / Portfolio (PDF, DOC, DOCX)
                  </label>
                  <input
                    id="resume-file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-sky-100 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-sky-700 hover:file:bg-sky-200"
                  />
                  {file && (
                    <p className="mt-2 text-xs text-slate-500">
                      Selected file: {file.name}
                    </p>
                  )}
                </div>

                <AnimatePresence>
                  {submitStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                        submitStatus.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-red-200 bg-red-50 text-red-700"
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 ${
                      isSubmitting ? "cursor-not-allowed opacity-70" : ""
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                  {submitted && submitStatus.type === "success" && (
                    <span className="text-sm font-medium text-emerald-700">
                      Application received. We will contact you soon.
                    </span>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ApplicationFormSection;