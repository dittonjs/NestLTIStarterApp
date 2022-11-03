import { RoleKey } from "@prisma/client";
export const ROLE_KEYS = {
  admin: RoleKey.ADMIN,
  user: RoleKey.USER,
  // system roles
  "urn:lti:sysrole:ims/lis/SysAdmin": RoleKey.SYS_SYSADMIN,
  "urn:lti:sysrole:ims/lis/SysSupport": RoleKey.SYS_SUPPORT,
  "urn:lti:sysrole:ims/lis/Creator": RoleKey.SYS_CREATOR,
  "urn:lti:sysrole:ims/lis/AccountAdmin": RoleKey.SYS_ACCOUNTADMIN,
  "urn:lti:sysrole:ims/lis/User": RoleKey.SYS_USER,
  "urn:lti:sysrole:ims/lis/Administrator": RoleKey.SYS_ADMINISTRATOR,
  "urn:lti:sysrole:ims/lis/None": RoleKey.SYS_NONE,
  // institutional roles
  "urn:lti:instrole:ims/lis/Student": RoleKey.INST_STUDENT,
  "urn:lti:instrole:ims/lis/Faculty": RoleKey.INST_FACULTY,
  "urn:lti:instrole:ims/lis/Member": RoleKey.INST_MEMBER,
  "urn:lti:instrole:ims/lis/Learner": RoleKey.INST_LEARNER,
  "urn:lti:instrole:ims/lis/Instructor": RoleKey.INST_INSTRUCTOR,
  "urn:lti:instrole:ims/lis/Mentor": RoleKey.INST_MENTOR,
  "urn:lti:instrole:ims/lis/Staff": RoleKey.INST_STAFF,
  "urn:lti:instrole:ims/lis/Alumni": RoleKey.INST_ALUMNI,
  "urn:lti:instrole:ims/lis/ProspectiveStudent":
    RoleKey.INST_PROSPECTIVESTUDENT,
  "urn:lti:instrole:ims/lis/Guest": RoleKey.INST_GUEST,
  "urn:lti:instrole:ims/lis/Other": RoleKey.INST_OTHER,
  "urn:lti:instrole:ims/lis/Administrator": RoleKey.INST_ADMINISTRATOR,
  "urn:lti:instrole:ims/lis/Observer": RoleKey.INST_OBSERVER,
  "urn:lti:instrole:ims/lis/None": RoleKey.INST_NONE,
  // context roles
  "urn:lti:role:ims/lis/Learner": RoleKey.CONTEXT_LEARNER,
  "urn:lti:role:ims/lis/Learner/Learner": RoleKey.CONTEXT_LEARNER_LEARNER,
  "urn:lti:role:ims/lis/Learner/NonCreditLearner":
    RoleKey.CONTEXT_LEARNER_NONCREDITLEARNER,
  "urn:lti:role:ims/lis/Learner/GuestLearner":
    RoleKey.CONTEXT_LEARNER_GUESTLEARNER,
  "urn:lti:role:ims/lis/Learner/ExternalLearner":
    RoleKey.CONTEXT_LEARNER_EXTERNALLECTURER,
  "urn:lti:role:ims/lis/Learner/Instructor": RoleKey.CONTEXT_LEARNER_INSTRUCTOR,
  "urn:lti:role:ims/lis/Instructor": RoleKey.CONTEXT_INSTRUCTOR,
  "urn:lti:role:ims/lis/Instructor/PrimaryInstructor":
    RoleKey.CONTEXT_INSTRUCTOR_PRIMARYINSTRUCTOR,
  "urn:lti:role:ims/lis/Instructor/Lecturer":
    RoleKey.CONTEXT_INSTRUCTOR_LECTURER,
  "urn:lti:role:ims/lis/Instructor/GuestInstructor":
    RoleKey.CONTEXT_INSTRUCTOR_GUESTINSTRUCTOR,
  "urn:lti:role:ims/lis/Instructor/ExternalInstructor":
    RoleKey.CONTEXT_INSTRUCTOR_EXTERNALINSTRUCTOR,
  "urn:lti:role:ims/lis/ContentDeveloper": RoleKey.CONTEXT_CONTENT_DEVELOPER,
  "urn:lti:role:ims/lis/ContentDeveloper/ContentDeveloper":
    RoleKey.CONTEXT_CONTENT_DEVELOPER_CONTENT_DEVELOPER,
  "urn:lti:role:ims/lis/ContentDeveloper/Librarian":
    RoleKey.CONTEXT_CONTENT_DEVELOPER_LIBRARIAN,
  "urn:lti:role:ims/lis/ContentDeveloper/ContentExpert":
    RoleKey.CONTEXT_CONTENT_DEVELOPER_CONTENTEXPERT,
  "urn:lti:role:ims/lis/ContentDeveloper/ExternalContentExpert":
    RoleKey.CONTEXT_CONTENT_DEVELOPER_EXTERNALCONTENTEXPERT,
  "urn:lti:role:ims/lis/Member": RoleKey.CONTEXT_MEMBER,
  "urn:lti:role:ims/lis/Member/Member": RoleKey.CONTEXT_MEMBER_MEMBER,
  "urn:lti:role:ims/lis/Manager": RoleKey.CONTEXT_MANAGER,
  "urn:lti:role:ims/lis/Manager/AreaManager":
    RoleKey.CONTEXT_MANAGER_AREAMANAGER,
  "urn:lti:role:ims/lis/Manager/CourseCoordinator":
    RoleKey.CONTEXT_MANAGER_COURSECOORDINATOR,
  "urn:lti:role:ims/lis/Manager/Observer": RoleKey.CONTEXT_MANAGER_OBSERVER,
  "urn:lti:role:ims/lis/Manager/ExternalObserver":
    RoleKey.CONTEXT_MANAGER_EXTERNALOBSERVER,
  "urn:lti:role:ims/lis/Mentor": RoleKey.CONTEXT_MENTOR,
  "urn:lti:role:ims/lis/Mentor/Mentor": RoleKey.CONTEXT_MENTOR_MENTOR,
  "urn:lti:role:ims/lis/Mentor/Reviewer": RoleKey.CONTEXT_MENTOR_REVIEWER,
  "urn:lti:role:ims/lis/Mentor/Advisor": RoleKey.CONTEXT_MENTOR_ADVISOR,
  "urn:lti:role:ims/lis/Mentor/Auditor": RoleKey.CONTEXT_MENTOR_AUDITOR,
  "urn:lti:role:ims/lis/Mentor/Tutor": RoleKey.CONTEXT_MENTOR_TUTOR,
  "urn:lti:role:ims/lis/Mentor/LearningFacilitator":
    RoleKey.CONTEXT_MENTOR_LEARNINGFACILITATOR,
  "urn:lti:role:ims/lis/Mentor/ExternalMentor":
    RoleKey.CONTEXT_MENTOR_EXTERNALMENTOR,
  "urn:lti:role:ims/lis/Mentor/ExternalReviewer":
    RoleKey.CONTEXT_MENTOR_EXTERNALREVIEWER,
  "urn:lti:role:ims/lis/Mentor/ExternalAdvisor":
    RoleKey.CONTEXT_MENTOR_EXTERNALADVISOR,
  "urn:lti:role:ims/lis/Mentor/ExternalAuditor":
    RoleKey.CONTEXT_MENTOR_EXTERNALAUDITOR,
  "urn:lti:role:ims/lis/Mentor/ExternalTutor":
    RoleKey.CONTEXT_MENTOR_EXTERNALTUTUR,
  "urn:lti:role:ims/lis/Mentor/ExternalLearningFacilitator":
    RoleKey.CONTEXT_MENTOR_EXTERNALLEARNINGFACILITATOR,
  "urn:lti:role:ims/lis/Administrator": RoleKey.CONTEXT_ADMINISTRATOR,
  "urn:lti:role:ims/lis/Administrator/Administrator":
    RoleKey.CONTEXT_ADMINISTRATOR_ADMINISTRATOR,
  "urn:lti:role:ims/lis/Administrator/Support":
    RoleKey.CONTEXT_ADMINISTRATOR_SUPPORT,
  "urn:lti:role:ims/lis/Administrator/Developer":
    RoleKey.CONTEXT_ADMINISTRATOR_DEVELOPER,
  "urn:lti:role:ims/lis/Administrator/SystemAdministrator":
    RoleKey.CONTEXT_ADMINISTRATOR_SYSTEMADMINISTRATOR,
  "urn:lti:role:ims/lis/Administrator/ExternalSystemAdministrator":
    RoleKey.CONTEXT_ADMINISTRATOR_EXTERNALSYSTEMADMINISTRATOR,
  "urn:lti:role:ims/lis/Administrator/ExternalDeveloper":
    RoleKey.CONTEXT_ADMINISTRATOR_EXTERNALDEVELOPER,
  "urn:lti:role:ims/lis/Administrator/ExternalSupport":
    RoleKey.CONTEXT_ADMINISTRATOR_EXTERNALSUPPORT,
  "urn:lti:role:ims/lis/TeachingAssistant": RoleKey.CONTEXT_TEACHINGASSISTANT,
  "urn:lti:role:ims/lis/TeachingAssistant/TeachingAssistant":
    RoleKey.CONTEXT_TEACHINGASSISTANT_TEACHINGASSISTANT,
  "urn:lti:role:ims/lis/TeachingAssistant/TeachingAssistantSection":
    RoleKey.CONTEXT_TEACHINGASSISTANT_TEACHINGASSISTANTSECTION,
  "urn:lti:role:ims/lis/TeachingAssistant/TeachingAssistantSectionAssociation":
    RoleKey.CONTEXT_TEACHINGASSISTANT_TEACHINGASSISTANTSECTIONASSOCIATION,
  "urn:lti:role:ims/lis/TeachingAssistant/TeachingAssistantOffering":
    RoleKey.CONTEXT_TEACHINGASSISTANT_TEACHINGASSISTANTOFFERING,
  "urn:lti:role:ims/lis/TeachingAssistant/TeachingAssistantTemplate":
    RoleKey.CONTEXT_TEACHINGASSISTANT_TEACHINGASSISTANTTEMPLATE,
  "urn:lti:role:ims/lis/TeachingAssistant/TeachingAssistantGroup":
    RoleKey.CONTEXT_TEACHINGASSISTANT_TEACHINGASSISTANTGROUP,
  "urn:lti:role:ims/lis/TeachingAssistant/Grader":
    RoleKey.CONTEXT_TEACHINGASSISTANT_GRADER,
};
