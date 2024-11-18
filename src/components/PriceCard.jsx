import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "react-bootstrap";
import "../style/PriceCard.css";

const PriceCard = () => {
  return (
    <>
      <div id="pricing" className="container card-container">
        <br />
        <Row>
          {/* Card 1 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="mb-4 d-flex justify-content-center "
          >
            <Card className="card card-price">
              <Card.Header>Basic</Card.Header>
              <Card.Body>
                <Card.Title>$2</Card.Title>
                <Card.Text>
                  Up to 60-sec one video (1min) High-Quality YouTube Short/
                  Youtube video/Instagram Reel/ Tiktok <br /> Alex Hormozi-Style{" "}
                  , etc..
                  <br />
                  (Inbox before ordering)
                  <hr />
                  <ul class="video-list">
                    <li class="video-item">Video-1 ✔</li>
                    <li class="video-item">running time-60 seconds ✔</li>
                    <li class="video-item">version-1 ✔</li>
                    <li class="video-item">Subtitles-Included ✔</li>
                    <li class="video-item correct-mark">
                      Delivery Time-1 day ✔
                    </li>
                    <li class="video-item correct-mark">Revision-3 times ✔</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="card card-price">
              <Card.Header>Standard</Card.Header>
              <Card.Body>
                <Card.Title>$10</Card.Title>
                <Card.Text>
                  Up to 60-sec 5-video (1min) High-Quality YouTube Short/
                  Youtube video/Instagram Reel/ Tiktok
                  <br />
                  (Inbox before ordering)
                  <hr />
                  <ul class="video-list">
                    <li class="video-item">Video-1 ✔</li>
                    <li class="video-item">running time-60 seconds ✔</li>
                    <li class="video-item">version-1 ✔</li>
                    <li class="video-item">Subtitles-Included ✔</li>
                    <li class="video-item correct-mark">
                      Delivery Time-3 day(depends orders in queue) ✔
                    </li>
                    <li class="video-item correct-mark">Revision-3 times ✔</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="card card-price">
              <Card.Header>Premium</Card.Header>
              <Card.Body>
                <Card.Title>$16</Card.Title>
                <Card.Text>
                  Up to 10-min one video High-Quality video/ Youtube Video /
                  Cash Cow YouTube / Motivational video
                  <br />
                  (Inbox before ordering)
                  <hr />
                  <ul class="video-list">
                    <li class="video-item">Video-1 ✔</li>
                    <li class="video-item">running time-10 min ✔</li>
                    <li class="video-item">version-1 ✔</li>
                    <li class="video-item">Subtitles-Included ✔</li>
                    <li class="video-item correct-mark">
                      Delivery Time-3 day(depends orders in queue) ✔
                    </li>
                    <li class="video-item correct-mark">Revision-3 times ✔</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default PriceCard;
