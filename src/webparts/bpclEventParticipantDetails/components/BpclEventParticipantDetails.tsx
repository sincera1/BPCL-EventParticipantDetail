import * as React from "react";
import styles from "./BpclEventParticipantDetails.module.scss";
import type { IBpclEventParticipantDetailsProps } from "./IBpclEventParticipantDetailsProps";
import { Row, Col, Container, Accordion } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import eventbg1 from "../assets/eventbg1.png";

const BpclEventParticipantDetailsProps: React.FC<
  IBpclEventParticipantDetailsProps
> = (props) => {
  return (
    <section className={styles.commonSectionstyle}>
      {/* Banner */}
      <Row>
        <Col xs={12}>
          <div className={styles.bannerContainer}>
            {/* Full Width Banner Image */}
            <img
              src={eventbg1}
              alt="BPCL Annual Sports Meet"
              className={styles.bannerImage}
            />

            {/* Banner Overlay */}
            <div className={styles.bannerOverlay}>
              {/* Left Side - Back Button + Banner Content */}
              <div className={styles.bannerLeft}>
                <button type="button" className={styles.backBtn}>
                  <i className="bi bi-chevron-left" />
                </button>

                <div className={styles.bannerContent}>
                  <h1>Participant / Team Detail</h1>

                  <p>
                    Team ID #EVTTM2786786
                    <span className={styles.divider}>|</span>
                    Event Name
                  </p>
                </div>
              </div>

              {/* Right Side - Stats */}
              <div className={styles.statsWrapper}>
                {/* Stages Cleared */}
                <div className={styles.stageCard}>
                  <div className={styles.stageLabel}>Stages Cleared</div>

                  <div className={styles.stageValue}>
                    <span>8</span>
                    <span>/ 10</span>
                  </div>
                </div>

                {/* Overall Status */}
                <div className={styles.stageCard}>
                  <div className={styles.stageLabel}>Overall Status</div>

                  {/* <div className={styles.stageValue}>
                    <span className={styles.statusIcon}>
                      <i className="bi bi-check-lg" />
                    </span>

                    <strong>Qualified</strong>
                  </div> */}
                  <div className={styles.stageValue}>
                    <i className="bi bi-check-circle-fill" />
                    <strong>Qualified</strong>
                  </div>
                </div>

                {/* Send Mail */}
                <button type="button" className={styles.mailButton}>
                  <span className={styles.mailIcon}>
                    <i className="bi bi-envelope" />
                  </span>

                  <span>Send Mail</span>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          {/* <Col md={4}> */}
          <Col xs={12} lg={4}>
            <div className={`${styles.card} p-3 mt-4`}>
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.teamInfoIconBox}>
                  <i className="bi bi-card-checklist fs-3" />
                </div>

                <h5 className={styles.eventTitle}>Team Information</h5>
              </div>

              {/* Information */}
              <div className={styles.infoList}>
                {/* Team ID */}
                <div className={styles.infoItem}>
                  <i className={`bi bi-card-list ${styles.icon}`} />

                  <div>
                    <div className={styles.infoLabel}>Team ID</div>
                    <div className={styles.infoValue}>EVTTM2786786</div>
                  </div>
                </div>

                {/* Team Leader */}
                <div className={styles.infoItem}>
                  <i className={`bi bi-person ${styles.icon}`} />

                  <div>
                    <div className={styles.infoLabel}>Team Leader</div>
                    <div className={styles.infoValue}>Ajay Varadharajan</div>
                  </div>
                </div>

                {/* Team Members */}
                <div className={styles.infoItem}>
                  <i className={`bi bi-people ${styles.icon}`} />

                  <div>
                    <div className={styles.infoLabel}>Team Members</div>
                    <div className={styles.infoValue}>6 Members</div>
                  </div>
                </div>

                {/* Event Name */}
                <div className={styles.infoItem}>
                  <i className={`bi bi-calendar-event ${styles.icon}`} />

                  <div>
                    <div className={styles.infoLabel}>Event Name</div>
                    <div className={styles.infoValue}>Tech Innovation Expo</div>
                  </div>
                </div>

                {/* Registered Date */}
                <div className={styles.infoItem}>
                  <i className={`bi bi-calendar-check ${styles.icon}`} />

                  <div>
                    <div className={styles.infoLabel}>Registered Date</div>
                    <div className={styles.infoValue}>29 Jul 2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members list */}

            <div className={`${styles.card} p-3 mt-4`}>
              {/* Header */}
              <div className={`${styles.header} mb-3`}>
                <div className={styles.teamInfoIconBox}>
                  <i className="bi bi-people fs-3" />
                </div>

                <h5 className={styles.eventTitle}>Team Members</h5>
              </div>

              {/* Team Members */}
              <div className={`${styles.teamMembers} mt-2 mx-n3 mb-n3`}>
                {/* Team Leader */}
                <div className="d-flex align-items-center gap-2 px-3 py-3">
                  <div className={`${styles.memberAvatar} flex-shrink-0`}>
                    <i className="bi bi-person-circle" />
                  </div>

                  <div className="flex-grow-1 text-truncate">
                    <div className={`${styles.memberName} text-truncate`}>
                      Jeyaprakash
                    </div>
                    <div className={`${styles.memberEmail} text-truncate`}>
                      jp@bpcl.com
                    </div>
                  </div>

                  <span className={`${styles.teamLeadBadge} flex-shrink-0`}>
                    Team Lead
                  </span>
                </div>

                {/* Member 2 */}
                <div className="d-flex align-items-center gap-2 px-3 py-3 border-top">
                  <div className={`${styles.memberAvatar} flex-shrink-0`}>
                    <i className="bi bi-person-circle" />
                  </div>

                  <div className="flex-grow-1 text-truncate">
                    <div className={`${styles.memberName} text-truncate`}>
                      Aravindhan
                    </div>
                    <div className={`${styles.memberEmail} text-truncate`}>
                      aravindhan@bpcl.com
                    </div>
                  </div>
                </div>

                {/* Member 3 */}
                <div className="d-flex align-items-center gap-2 px-3 py-3 border-top">
                  <div className={`${styles.memberAvatar} flex-shrink-0`}>
                    <i className="bi bi-person-circle" />
                  </div>

                  <div className="flex-grow-1 text-truncate">
                    <div className={`${styles.memberName} text-truncate`}>
                      Ajay Varadharajan
                    </div>
                    <div className={`${styles.memberEmail} text-truncate`}>
                      ajay@bpcl.com
                    </div>
                  </div>
                </div>

                {/* Member 4 */}
                <div className="d-flex align-items-center gap-2 px-3 py-3 border-top">
                  <div className={`${styles.memberAvatar} flex-shrink-0`}>
                    <i className="bi bi-person-circle" />
                  </div>

                  <div className="flex-grow-1 text-truncate">
                    <div className={`${styles.memberName} text-truncate`}>
                      Mandem Naveen Kumar
                    </div>
                    <div className={`${styles.memberEmail} text-truncate`}>
                      naveen@bpcl.com
                    </div>
                  </div>
                </div>

                {/* Member 5 */}
                <div className="d-flex align-items-center gap-2 px-3 py-3 border-top">
                  <div className={`${styles.memberAvatar} flex-shrink-0`}>
                    <i className="bi bi-person-circle" />
                  </div>

                  <div className="flex-grow-1 text-truncate">
                    <div className={`${styles.memberName} text-truncate`}>
                      Jeyaparakash
                    </div>
                    <div className={`${styles.memberEmail} text-truncate`}>
                      Jeyaprakash@bpcl.com
                    </div>
                  </div>
                </div>

                {/* Member 6 */}
                <div className="d-flex align-items-center gap-2 px-3 py-3 border-top">
                  <div className={`${styles.memberAvatar} flex-shrink-0`}>
                    <i className="bi bi-person-circle" />
                  </div>

                  <div className="flex-grow-1 text-truncate">
                    <div className={`${styles.memberName} text-truncate`}>
                      Jeyaparakash
                    </div>
                    <div className={`${styles.memberEmail} text-truncate`}>
                      Jeyaprakash@bpcl.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.card} p-3 mt-4`}>
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.teamInfoIconBox}>
                  <i className="bi bi-person fs-3" />
                </div>

                <h5 className={styles.eventTitle}>Participant Information</h5>
              </div>

              {/* Information */}
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  {/* <i className={`bi bi-card-list ${styles.icon}`} /> */}

                  <div>
                    <div className={styles.infoLabel}>Partcipant ID</div>
                    <div className={styles.infoValue}>EVTTM2786786</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  {/* <i className={`bi bi-person ${styles.icon}`} /> */}

                  <div>
                    <div className={styles.infoLabel}>Participant Name</div>
                    <div className={styles.infoValue}>Ajay Varadharajan</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  {/* <i className={`bi bi-people ${styles.icon}`} /> */}

                  <div>
                    <div className={styles.infoLabel}>Email ID</div>
                    <div className={styles.infoValue}>
                      ajayvaradharajan@bpcl.com
                    </div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  {/* <i className={`bi bi-calendar-event ${styles.icon}`} /> */}

                  <div>
                    <div className={styles.infoLabel}>Conatct Number</div>
                    <div className={styles.infoValue}>9887543210</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  {/* <i className={`bi bi-calendar-check ${styles.icon}`} /> */}

                  <div>
                    <div className={styles.infoLabel}>Registered Date</div>
                    <div className={styles.infoValue}>13 August 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col md={8} > */}
          <Col xs={12} lg={8}>
            <div className={`${styles.card} p-3 mt-4`}>
              {/* ================= HEADER ================= */}

              <div className={styles.header}>
                <div className={styles.teamInfoIconBox}>
                  <i className="bi bi-calendar4-event fs-3" />
                </div>

                <h5 className={styles.eventTitle}>Sub-Events & Stages</h5>
              </div>

              {/* ================= ACCORDION ================= */}

              <Accordion defaultActiveKey="0" className={styles.accordion}>
                {/* =================================================
            SUB EVENT 1
        ================================================== */}

                <Accordion.Item eventKey="0" className={styles.accordionItem}>
                  <Accordion.Header>
                    <div className={styles.accordionTitle}>
                      <span>Sub-Event Name1</span>

                      <span
                        className={`${styles.statusBadge} ${styles.qualified}`}
                      >
                        Qualified
                      </span>
                      <span
                        className={`${styles.statusBadge} ${styles.notQualified}`}
                      >
                        Not Qualified
                      </span>
                      <span
                        className={`${styles.statusBadge} ${styles.resultsPending}`}
                      >
                        Results Pending
                      </span>
                      <span
                        className={`${styles.statusBadge} ${styles.winner}`}
                      >
                        Winner
                      </span>
                      <span
                        className={`${styles.statusBadge} ${styles.registered}`}
                      >
                        Registered
                      </span>
                      <span
                        className={`${styles.statusBadge} ${styles.stageInProgress}`}
                      >
                        Stage In Progress
                      </span>
                    </div>
                  </Accordion.Header>

                  <Accordion.Body className={styles.accordionBody}>
                    {/* ================= STAGE 1 ================= */}

                    <div className={styles.stage}>
                      <div className={styles.stageTitle}>
                        <span className={styles.stageCircle}>
                          <span />
                        </span>

                        <span>Stage 1</span>
                      </div>

                      <div className={styles.stageDetails}>
                        {/* Participants */}

                        <div className={styles.detailItem}>
                          <i className={`bi bi-people ${styles.detailIcon}`} />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>
                              Participants
                            </div>

                            <div className={styles.detailValue}>
                              1. Ajay Varadharajan
                              <br />
                              2. Jeyaprakash
                            </div>
                          </div>
                        </div>

                        {/* Submitted Documents */}

                        <div className={styles.detailItem}>
                          <i
                            className={`bi bi-file-earmark-text ${styles.detailIcon}`}
                          />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>
                              Submitted Documents
                            </div>

                            <a href="#" className={styles.document}>
                              <i className="bi bi-file-earmark-pdf" />
                              Tech-Info.pdf
                            </a>
                          </div>
                        </div>

                        {/* Date */}

                        <div className={styles.detailItem}>
                          <i
                            className={`bi bi-calendar3 ${styles.detailIcon}`}
                          />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>
                              Document Submitted on
                            </div>

                            <div className={styles.detailValue}>
                              12 Jul 2026
                            </div>
                          </div>
                        </div>

                        {/* Status */}

                        <div className={styles.detailItem}>
                          {/* <i
                            className={`bi bi-check-circle-fill ${styles.statusIcon}`}
                          /> */}
                          <i
                            className={` bi-list-check ${styles.detailIcon}`}
                          />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>Status</div>

                            <div className={styles.detailValue}>Qualified</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ================= STAGE 2 ================= */}

                    <div className={styles.stage}>
                      <div className={styles.stageTitle}>
                        <span className={styles.stageCircle}>
                          <span />
                        </span>

                        <span>Stage 2</span>
                      </div>

                      <div className={styles.stageDetails}>
                        {/* Participants */}

                        <div className={styles.detailItem}>
                          <i className={`bi bi-people ${styles.detailIcon}`} />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>
                              Participants
                            </div>

                            <div className={styles.detailValue}>
                              1. Aravindhan
                              <br />
                              2. Jeyaprakash
                              <br />
                              3. Ajay Varadharajan
                              <br />
                              4. Mandem Naveen Kumar
                              <br />
                              5. Aravindhan
                              <br />
                              6. Jeyaprakash
                              <br />
                              7. Ajay Varadharajan
                            </div>
                          </div>
                        </div>

                        {/* Submitted Documents */}

                        <div className={styles.detailItem}>
                          <i
                            className={`bi bi-file-earmark-text ${styles.detailIcon}`}
                          />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>
                              Submitted Documents
                            </div>

                            <a href="#" className={styles.document}>
                              <i className="bi bi-file-earmark-pdf" />
                              Tech-Info.pdf
                            </a>
                          </div>
                        </div>

                        {/* Date */}

                        <div className={styles.detailItem}>
                          <i
                            className={`bi bi-calendar3 ${styles.detailIcon}`}
                          />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>
                              Document Submitted on
                            </div>

                            <div className={styles.detailValue}>
                              12 Jul 2026
                            </div>
                          </div>
                        </div>

                        {/* Status */}

                        <div className={styles.detailItem}>
                          <i
                            className={`bi bi-check-circle-fill ${styles.statusIcon}`}
                          />

                          <div className={styles.detailContent}>
                            <div className={styles.detailLabel}>Status</div>

                            <div className={styles.detailValue}>Qualified</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* =================================================
            SUB EVENT 2
        ================================================== */}

                <Accordion.Item eventKey="1" className={styles.accordionItem}>
                  <Accordion.Header>
                    <div className={styles.accordionTitle}>
                      <span>Sub-Event Name2</span>

                      <span
                        className={`${styles.statusBadge} ${styles.notQualified}`}
                      >
                        Not Qualified
                      </span>
                    </div>
                  </Accordion.Header>

                  <Accordion.Body
                    className={styles.accordionBody}
                  ></Accordion.Body>
                </Accordion.Item>

                {/* =================================================
            SUB EVENT 3
        ================================================== */}

                <Accordion.Item eventKey="2" className={styles.accordionItem}>
                  <Accordion.Header>
                    <div className={styles.accordionTitle}>
                      <span>Sub-Event Name3</span>

                      <span
                        className={`${styles.statusBadge} ${styles.qualified}`}
                      >
                        Qualified
                      </span>
                    </div>
                  </Accordion.Header>

                  <Accordion.Body
                    className={styles.accordionBody}
                  ></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BpclEventParticipantDetailsProps;
