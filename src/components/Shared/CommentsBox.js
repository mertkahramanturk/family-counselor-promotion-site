import React, { Component } from "react";
import { Card, CardBody, Row, Col, Badge } from "reactstrap";

import client01 from "../../assets/images/client/01.jpg";
import client02 from "../../assets/images/client/02.jpg";

class CommentsBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="shadow rounded border-0 mt-4">
          <CardBody>
            <Row>
              <Col md={12}>
                <div class="timeline block">
                  <div class="tl-item">
                    <div class="tl-dot">
                      <img
                        src={client01}
                        className="img-fluid avatar avatar-md-sm mx-auto"
                        alt=""
                      />
                    </div>
                    <div class="tl-content">
                      <p className="mb-0" style={{ lineHeight: '20px' }}> <b>Howard Tanner</b> sent to message</p>
                      <small class="tl-date text-muted mt-1">02/01/2022 10:00</small>
                      <div class="mt-3">
                        <p class="text-muted fst-italic p-3 bg-light rounded">
                          More detailed description about the issue needed.
                        </p>
                      </div>
                    </div>

                  </div>
                  <div class="tl-item active">
                    <div class="tl-dot">
                      <img
                        src={client02}
                        className="img-fluid avatar avatar-md-sm mx-auto"
                        alt=""
                      />
                    </div>
                    <div class="tl-content">
                      <p className="mb-0" style={{ lineHeight: '20px' }}> <b>Wendy Filson</b> changed the state to <Badge color="warning" className='px-3 py-1'>More Info</Badge></p>
                      <small class="tl-date text-muted mt-1">01/01/2022 15:00</small>
                    </div>
                  </div>

                  <div class="tl-item">
                    <div class="tl-dot">
                      <img
                        src={client01}
                        className="img-fluid avatar avatar-md-sm mx-auto"
                        alt=""
                      />
                    </div>
                    <div class="tl-content">
                      <p className="mb-0" style={{ lineHeight: '20px' }}> <b>Howard Tanner</b> created submission</p>
                      <small class="tl-date text-muted mt-1">01/01/2022 09:00</small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

          </CardBody>
        </Card>

        {/*
        <Card className="shadow rounded border-0 mt-4">
          <CardBody>
            <ul className="media-list list-unstyled mb-0">
              {this.props.comments.map((comment, key) => (
                <li key={key} className="mt-4">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link className="pe-3" to="#">
                        <img
                          src={comment.image}
                          className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                          alt="img"
                        />
                      </Link>
                      <div className="commentor-detail">
                        <h6 className="mb-0">
                          <Link to="#" className="text-dark media-heading">
                            {comment.name}
                          </Link>
                        </h6>
                        <small className="text-muted">
                          {comment.date} at {comment.time}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-muted fst-italic p-3 bg-light rounded">
                      " {comment.desc} "
                    </p>
                  </div>
                  {comment.replies ? (
                    <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                      {comment.replies.map((reply, key) => (
                        <li key={key} className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link className="pe-3" to="#">
                                <img
                                  src={reply.image}
                                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                  alt="comment"
                                />
                              </Link>
                              <div className="commentor-detail">
                                <h6 className="mb-0">
                                  <Link
                                    to="#"
                                    className="text-dark media-heading"
                                  >
                                    {reply.name}
                                  </Link>
                                </h6>
                                <small className="text-muted">
                                  {reply.date} at {reply.time}
                                </small>
                              </div>
                            </div>
                            <Link to="#" className="text-muted">
                              <i className="mdi mdi-reply"></i> Reply
                            </Link>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">
                              " {reply.desc} "
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul> 
            <div class="p-2 rounded-bottom shadow">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Enter Message..." />
                </div>
                <div class="col-auto">
                  <a href="#" class="btn btn-icon btn-primary"><i class="uil uil-message"></i></a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card> */}
      </React.Fragment>
    );
  }
}

export default CommentsBox;
