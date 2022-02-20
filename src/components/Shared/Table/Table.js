import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Button,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Label,
  Row,
  FormGroup,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { withTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom";
import MaterialTable from "material-table";
import { scrollNavigation } from "../../../utils";

// Material Theme
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//Material Icons
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Clear from "@material-ui/icons/Clear";

class Table extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    header: PropTypes.bool,
    columns: PropTypes.array,
    data: PropTypes.any,
    actions: PropTypes.array,
    isRemoteData: PropTypes.bool,
    changePageorPageSize: PropTypes.func,
    toolbar: PropTypes.bool,
    paging: PropTypes.bool,
    search: PropTypes.bool,
    selection: PropTypes.bool,
    selectionOnlyOneRow: PropTypes.bool,
    onSelectionChange: PropTypes.func,
    showSelectAllCheckbox: PropTypes.bool,
    minBodyHeight: PropTypes.string,
    maxBodyHeight: PropTypes.string,
    actionsColumnIndex: PropTypes.number,
  };

  static defaultProps = {
    header: true,
    columns: [],
    data: [],
    actions: [],
    isRemoteData: false,
    toolbar: true,
    paging: true,
    search: true,
    selection: false,
    selectionOnlyOneRow: false,
    onSelectionChange: undefined,
    showSelectAllCheckbox: false,
    minBodyHeight: "auto",
    maxBodyHeight: "auto",
    actionsColumnIndex: 0,
  };
  state = {};

  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.theme = createMuiTheme({
      typography: {
        fontSize: 16,
        color: "#3c4858 !important",
      },
      overrides: {
        MuiTableCell: {
          head: {
            fontFamily: "Nunito, sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            padding: "1rem !important",
            color: "#212529 !important",
            textAlign: "left !important",
            borderTop: "1.1px solid #e9ecef",
          },
          root: {
            fontFamily: "Nunito, sans-serif",
            padding: "1rem",
            border: "1px solid #fff",
            color: "#4D4F5C !important",
            minHeight: "40px !important",
            height: "40px !important",
            verticalAlign: "middle",
          },
          footer: {
            fontFamily: "Nunito, sans-serif",
            minHeight: "auto !important",
            height: "auto !important",
          },
        },
        MuiTableRow: {
          root: {
            backgroundColor: "#fff",
            border: "1.1px solid #e9ecef",
            "&:last-child": {
              borderTop: "none !important",
            },
            "&:hover": {
              backgroundColor: "#f8f9fc",
            },
          },
          footer: {
            backgroundColor: "#fff !important",
          },
        },
        MuiTablePagination: {
          root: {
            "&:hover": {
              backgroundColor: "#fff !important",
            },
          },
        },
      },
    });
  }

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    const { isRemoteData } = this.props;

    if (
      isRemoteData &&
      oldProps.data !== newProps.data &&
      newProps.data.length !== 0
    ) {
      this.tableRef.current &&
        this.tableRef.current.onQueryChange({
          page: newProps.data.page,
          pageSize: newProps.data.pageSize,
        });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", scrollNavigation, true);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    const {
      t,
      i18n,
      header,
      columns,
      data,
      actions,
      isRemoteData,
      changePageorPageSize,
      toolbar,
      paging,
      selection,
      showSelectAllCheckbox,
      minBodyHeight,
      maxBodyHeight,
      actionsColumnIndex,
    } = this.props;

    let columnss = [];
    if (columns !== undefined) {
      columnss = columns.map((key) => {
        if (
          key.field === "id" ||
          key.field === "no" ||
          key.field === "transaction_id"
        ) {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              return <span className="fw-bold"> {rowData[key.field]} </span>;
            },
          };
        } else if (key.field === "report_name") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              return (
                <Link to={`reports-detail/${rowData["report_id"]}`}>
                  {rowData[key.field]}
                </Link>
              );
            },
          };
        } else if (key.field === "report_status") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              switch (rowData[key.field]) {
                case "New":
                  return (
                    <Badge color="primary" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );

                case "More Info":
                  return (
                    <Badge color="warning" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Informative":
                  return (
                    <Badge color="warning" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Duplicate":
                  return (
                    <Badge color="warning" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Accepted":
                  return (
                    <Badge color="success" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Out of Scope":
                  return (
                    <Badge color="danger" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Invalid":
                  return (
                    <Badge color="danger" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Spam":
                  return (
                    <Badge color="danger" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
              }
            },
          };
        } else if (key.field === "report_severity") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,

            render: (rowData) => {
              switch (rowData[key.field]) {
                case "P1":
                  return (
                    <React.Fragment>
                      <section>
                        <Row>
                          <Col style={{ top: "0.6rem" }} xs="6">
                            <Badge color="p1" className="px-1 py-1">
                              {rowData[key.field]}
                            </Badge>
                          </Col>
                          <Col xs="6">
                            <Button
                              color="none"
                              onClick={this.togglemodal}
                              data-toggle="modal"
                              data-target="#addnewcard"
                            >
                              <i
                                style={{ fontSize: "1.2rem", color: "#d13535" }}
                                class="uil uil-x"
                              >
                                {" "}
                              </i>
                            </Button>
                          </Col>
                        </Row>
                      </section>
                      <Modal
                        isOpen={this.state.modal}
                        role="dialog"
                        autoFocus={true}
                        centered={true}
                      >
                        <ModalHeader toggle={this.togglemodal}>
                          Send a objection{" "}
                        </ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className="form-label">
                              Explain your reason for objection
                            </Label>
                            <br></br>
                            <Label className="form-label" for="exampleText">
                              Detail:{" "}
                            </Label>
                            <Input
                              id="exampleText"
                              name="text"
                              type="textarea"
                              placeholder="Please write objection detail.."
                            />
                          </FormGroup>
                          <br></br>
                          <Label className="form-label">
                            Are you sure you want to object to the generated
                            report?
                          </Label>
                        </ModalBody>
                        <ModalFooter>
                          <Row>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Send </span>
                              </Button>
                            </Col>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Cancel </span>
                              </Button>
                            </Col>
                          </Row>{" "}
                        </ModalFooter>
                      </Modal>
                    </React.Fragment>
                  );
                case "P2":
                  return (
                    <React.Fragment>
                      <section>
                        <Row>
                          <Col style={{ top: "0.6rem" }} xs="6">
                            <Badge
                              tyle={{ top: "20rem" }}
                              color="p2"
                              className="px-1 py-1"
                            >
                              {rowData[key.field]}
                            </Badge>{" "}
                          </Col>
                          <Col xs="6">
                            <Button
                              color="none"
                              onClick={this.togglemodal}
                              data-toggle="modal"
                              data-target="#addnewcard"
                            >
                              <i
                                style={{ fontSize: "1.2rem", color: "#d13535"  }}
                                class="uil uil-x"
                              >
                                {" "}
                              </i>
                            </Button>
                          </Col>
                        </Row>
                      </section>
                      <Modal
                        isOpen={this.state.modal}
                        role="dialog"
                        autoFocus={true}
                        centered={true}
                      >
                        <ModalHeader toggle={this.togglemodal}>
                        Send a objection
                        </ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className="form-label">
                              Explain your reason for objection
                            </Label>
                            <br></br>
                            <Label className="form-label" for="exampleText">
                              Detail:{" "}
                            </Label>
                            <Input
                              id="exampleText"
                              name="text"
                              type="textarea"
                              placeholder="Please write objection detail.."
                            />
                          </FormGroup>
                          <br></br>
                          <Label className="form-label">
                            Are you sure you want to object to the generated
                            report?
                          </Label>
                        </ModalBody>
                        <ModalFooter>
                          <Row>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Send </span>
                              </Button>
                            </Col>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Cancel </span>
                              </Button>
                            </Col>
                          </Row>{" "}
                        </ModalFooter>
                      </Modal>
                    </React.Fragment>
                  );

                case "P3":
                  return (
                    <React.Fragment>
                      <section>
                        <Row>
                          <Col style={{ top: "0.6rem" }} xs="6">
                            <Badge color="p3" className="px-1 py-1">
                              {rowData[key.field]}
                            </Badge>
                          </Col>
                          <Col xs="6">
                            <Button
                              color="none"
                              onClick={this.togglemodal}
                              data-toggle="modal"
                              data-target="#addnewcard"
                            >
                              <i
                                style={{ fontSize: "1.2rem", color: "#d13535" }}
                                class="uil uil-x"
                              >
                                {" "}
                              </i>
                            </Button>
                          </Col>
                        </Row>
                      </section>
                      <Modal
                        isOpen={this.state.modal}
                        role="dialog"
                        autoFocus={true}
                        centered={true}
                      >
                        <ModalHeader toggle={this.togglemodal}>
                        Send a objection
                        </ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className="form-label">
                              Explain your reason for objection
                            </Label>
                            <br></br>
                            <Label className="form-label" for="exampleText">
                              Detail:{" "}
                            </Label>
                            <Input
                              id="exampleText"
                              name="text"
                              type="textarea"
                              placeholder="Please write objection detail.."
                            />
                          </FormGroup>
                          <br></br>
                          <Label className="form-label">
                            Are you sure you want to object to the generated
                            report?
                          </Label>
                        </ModalBody>
                        <ModalFooter>
                          <Row>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Send </span>
                              </Button>
                            </Col>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Cancel </span>
                              </Button>
                            </Col>
                          </Row>{" "}
                        </ModalFooter>
                      </Modal>
                    </React.Fragment>
                  );
                case "P4":
                  return (
                    <React.Fragment>
                      <section>
                        <Row>
                          <Col style={{ top: "0.6rem" }} xs="6">
                            <Badge color="p4" className="px-1 py-1">
                              {rowData[key.field]}
                            </Badge>
                          </Col>
                          <Col xs="6">
                            <Button
                              color="none"
                              onClick={this.togglemodal}
                              data-toggle="modal"
                              data-target="#addnewcard"
                            >
                              <i
                                style={{ fontSize: "1.2rem", color: "#d13535" }}
                                class="uil uil-x"
                              >
                                {" "}
                              </i>
                            </Button>
                          </Col>
                        </Row>
                      </section>
                      <Modal
                        isOpen={this.state.modal}
                        role="dialog"
                        autoFocus={true}
                        centered={true}
                      >
                        <ModalHeader toggle={this.togglemodal}>
                        Send a objection
                        </ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className="form-label">
                              Explain your reason for objection
                            </Label>
                            <br></br>
                            <Label className="form-label" for="exampleText">
                              Detail:{" "}
                            </Label>
                            <Input
                              id="exampleText"
                              name="text"
                              type="textarea"
                              placeholder="Please write objection detail.."
                            />
                          </FormGroup>
                          <br></br>
                          <Label className="form-label">
                            Are you sure you want to object to the generated
                            report?
                          </Label>
                        </ModalBody>
                        <ModalFooter>
                          <Row>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Send </span>
                              </Button>
                            </Col>
                            <Col xs="6">
                              <Button
                                color="none"
                                className="btn-primary btn-md"
                              >
                                <span className="content"> Cancel </span>
                              </Button>
                            </Col>
                          </Row>{" "}
                        </ModalFooter>
                      </Modal>
                    </React.Fragment>
                  );
              }
            },
          };
        } else if (key.field === "payment_status") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              switch (rowData[key.field]) {
                case "Pending":
                  return (
                    <Badge color="warning" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Refunded":
                  return (
                    <Badge color="primary" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Failed":
                  return (
                    <Badge color="danger" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Completed":
                  return (
                    <Badge color="success" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
              }
            },
          };
        } else if (key.field === "help_status") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              switch (rowData[key.field]) {
                case "Processed":
                  return (
                    <Badge color="warning" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Refunded":
                  return (
                    <Badge color="primary" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Waiting":
                  return (
                    <Badge color="danger" className="px-3 py-1">
                      {rowData[key.field]}
                    </Badge>
                  );
                case "Concluded":
                  return (
                    <Row>
                      <Col xs="6">
                        <Badge color="success" className="px-3 ">
                          {rowData[key.field]}
                        </Badge>
                      </Col>
                      <Col style={{ paddingRight: "2rem" }} xs="6">
                        <a href="https://iconscout.com/unicons/explore/line">
                          <i
                            style={{ fontSize: "1.3rem", color: "#" }}
                            class="uil uil-eye"
                          ></i>
                        </a>
                      </Col>
                    </Row>
                  );
              }
            },
          };
        } else if (key.field === "leaderboard_no") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              if (rowData[key.field] === "1") {
                return (
                  <div className="d-flex justify-content-center align-item-center">
                    <span
                      className="text-warning"
                      style={{ fontSize: "1.6rem" }}
                    >
                      🥇
                    </span>
                  </div>
                );
              } else if (rowData[key.field] === "2") {
                return (
                  <div className="d-flex justify-content-center align-item-center">
                    <span class="text-secondary" style={{ fontSize: "1.6rem" }}>
                      🥈
                    </span>
                  </div>
                );
              } else if (rowData[key.field] === "3") {
                return (
                  <div className="d-flex justify-content-center align-item-center">
                    <span style={{ fontSize: "1.6rem", color: "#924b18" }}>
                      🥉
                    </span>
                  </div>
                );
              } else {
                return (
                  <div className="d-flex justify-content-center align-item-center">
                    <span className="fw-bold"> {rowData[key.field]} </span>
                  </div>
                );
              }
            },
          };
        } else if (key.field === "leaderboard_researcher") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              return (
                <div className="d-flex align-items-center">
                  <img
                    src={rowData.image_url}
                    className="avatar avatar-ex-small rounded-circle shadow"
                  />
                  <span className="ms-2">{rowData.leaderboard_researcher}</span>
                </div>
              );
            },
          };
        } else if (key.field === "score") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              return (
                <div className="d-flex align-items-center">
                  <i className="ti ti-star icon-sm me-1 text-warning" />
                  <span style={{ marginTop: "3px" }}>{rowData.score}</span>
                </div>
              );
            },
          };
        } else if (key.field === "rate") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            render: (rowData) => {
              return (
                <div className="d-flex align-items-center">
                  <i className="ti ti-wave-square icon-sm me-1 text-primary" />
                  <span style={{ marginTop: "3px" }}>{rowData.rate}</span>
                </div>
              );
            },
          };
        } else if (key.field === "hacktivity_detail") {
          return {
            title: key.title,
            field: key.field,
            cellStyle: { padding: "1.5rem" },
            width: key.width,
            render: (rowData) => {
              return (
                <div className="d-md-flex align-items-center border-0">
                  <img
                    src={rowData.image}
                    className="avatar avatar-md-sm"
                    alt=""
                  />
                  <div class="ms-md-4 mt-4 mt-sm-0">
                    <Link to="/job-board-detail" className="text-dark h5">
                      {rowData.description}
                    </Link>

                    <ul class="list-styled mb-0 p-0 ">
                      <li class="d-lg-inline text-muted mb-0 me-lg-2 small">
                        {t("common_words.job", { returnObjects: true })}:{" "}
                        <Link to="/job-board-detail">{rowData.job}</Link>
                      </li>
                      <li class="d-lg-inline text-muted mb-0 me-lg-2 small">
                        {t("common_words.by", { returnObjects: true })}:{" "}
                        <Link to="/profile">{rowData.researcher}</Link>
                      </li>
                      <li class="d-lg-inline text-muted mb-0 me-lg-2 small">
                        {t("common_words.severity", { returnObjects: true })}:{" "}
                        {(() => {
                          if (rowData.severity === "P1") {
                            return (
                              <Badge color="p1" className="px-1 py-1">
                                P1
                              </Badge>
                            );
                          } else if (rowData.severity === "P2") {
                            return (
                              <Badge color="p2" className="px-1 py-1">
                                P2
                              </Badge>
                            );
                          } else if (rowData.severity === "P3") {
                            return (
                              <Badge color="p3" className="px-1 py-1">
                                P3
                              </Badge>
                            );
                          } else if (rowData.severity === "P4") {
                            return (
                              <Badge color="p4" className="px-1 py-1">
                                P4
                              </Badge>
                            );
                          }
                        })()}
                      </li>
                      <li class="d-lg-inline text-muted mb-0 me-lg-2 small">
                        {t("common_words.award", { returnObjects: true })}:{" "}
                        <span className="text-success">{rowData.award}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            },
          };
        } else {
          return {
            title: key.title,
            field: key.field,
            cellStyle: key.cellStyle,
            width: key.width,
            searchable: key.searchable,
          };
        }
      });
    }

    return (
      <div className="material-table__wrap" style={{ width: "100%" }}>
        <MuiThemeProvider theme={this.theme}>
          <MaterialTable
            title="Styling with MuiThemeProvider Preview"
            columns={columnss}
            isLoading={data.loading}
            localization={{
              header: {
                actions: t("material_table_localization.header.actions"),
              },
              toolbar: {
                searchTooltip: t(
                  "material_table_localization.toolbar.searchTooltip"
                ),
                searchPlaceholder: t(
                  "material_table_localization.toolbar.searchTooltip"
                ),
              },
              body: {
                emptyDataSourceMessage: t(
                  "material_table_localization.body.emptyDataSourceMessage"
                ),
              },
              pagination: {
                labelRowsSelect: t(
                  "material_table_localization.pagination.labelRowsSelect"
                ),
                nextTooltip: t(
                  "material_table_localization.pagination.nextTooltip"
                ),
                previousTooltip: t(
                  "material_table_localization.pagination.previousTooltip"
                ),
                firstTooltip: t(
                  "material_table_localization.pagination.firstTooltip"
                ),
                lastTooltip: t(
                  "material_table_localization.pagination.lastTooltip"
                ),
                labelDisplayedRows: t(
                  "material_table_localization.pagination.labelDisplayedRows"
                ),
              },
            }}
            tableRef={this.tableRef}
            icons={{
              Check: () => <Check />,
              Export: () => <SaveAlt />,
              Filter: () => <FilterList />,
              FirstPage: () => <FirstPage />,
              LastPage: () => <LastPage />,
              NextPage: () => <ChevronRight />,
              PreviousPage: () => <ChevronLeft />,
              Search: () => <Search />,
              ResetSearch: () => <Clear />,
              ThirdStateCheck: () => <Remove />,
              ViewColumn: () => <ViewColumn />,
              DetailPanel: () => <ChevronRight />,
              Delete: () => <DeleteOutline />,
              SortArrow: (props) => <ArrowUpward {...props} fontSize="small" />,
            }}
            data={
              isRemoteData
                ? (query) =>
                    new Promise((resolve, reject) => {
                      resolve({
                        data: data && data.data ? data.data : [],
                        page: data.page,
                        totalCount: data.totalCount,
                      });
                    })
                : data || []
            }
            onChangePage={(page, pageSize) => {
              changePageorPageSize &&
                changePageorPageSize(
                  parseInt(page, 10),
                  parseInt(pageSize, 10)
                );
            }}
            actions={actions}
            components={{
              Actions: (props) => (
                <>
                  {props.actions.map((action, index) => (
                    <props.components.Action
                      action={action}
                      key={"action-" + index}
                      data={props.data}
                      size={props.size}
                      text={action.text && action.text(props.data)}
                      color={action.color && action.color(props.data)}
                      disabled={action.disabled && action.disabled(props.data)}
                      hidden={action.hidden && action.hidden(props.data)}
                    />
                  ))}
                </>
              ),
              Action: (props) => (
                <>
                  <Button
                    className={`btn-sm ${props.color}`}
                    onClick={(event) => props.action.onClick(event, props.data)}
                    disabled={props.disabled}
                  >
                    {props.text}
                  </Button>
                </>
              ),
              Pagination: (props) => (
                <Col xs="12" className="mt-4 pt-2">
                  <Pagination listClassName="justify-content-center mb-0">
                    <PaginationItem>
                      <PaginationLink to="#">
                        {t(
                          "material_table_localization.pagination.previousTooltip",
                          { returnObjects: true }
                        )}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink to="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink to="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink to="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink to="#">
                        {t(
                          "material_table_localization.pagination.nextTooltip",
                          { returnObjects: true }
                        )}
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </Col>
              ),
            }}
            options={{
              header: header,
              search: false,
              selection: selection,
              showSelectAllCheckbox: showSelectAllCheckbox,
              sorting: true,
              toolbar: toolbar,
              showTitle: false,
              paging: paging,
              paginationType: "stepped",
              emptyRowsWhenPaging: false,
              showFirstLastPageButtons: true,
              pageSizeOptions: [10, 20, 50],
              pageSize: data.pageSize || 10,
              minBodyHeight: minBodyHeight,
              maxBodyHeight: maxBodyHeight,
              detailPanelType: "single",
              actionsColumnIndex: actionsColumnIndex,
              rowStyle: (rowData, index) => ({
                background: rowData.tableData.checked && "#e9edf7",
              }),
            }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(withTranslation("common")(Table));
