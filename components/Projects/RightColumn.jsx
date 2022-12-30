import styled from "styled-components";
import FeaturedProject from "./FeaturedProject";
import { useState, useEffect, useMemo } from "react";
import Btn from "../../utils/Button";
import { CatchingPokemonSharp } from "@mui/icons-material";

const RightWrapper = styled.div`
  background-color: #efefef;
  width: 60%;
  position: relative;
  height: 100%;
  padding: 30px 40px;
  padding-right: calc(100vw * 0.025);
  .filter-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 7vh;
    column-gap: 35px;
  }
  h1 {
    font-size: 1.7rem;
    font-weight: 700;
    span {
      color: orange;
    }
  }
  .btn-container {
    display: flex;
    column-gap: 5px;
    opacity: 1;
    transition: none;
    height: 8vh;
    justify-content: flex-end;

    align-items: center;
  }

  .search {
    flex-shrink: 1;
    flex-grow: 2;
    font-weight: 300;
    /* min-width: 2vw; */

    input {
      width: 100%;
      border: none;
      font-size: 14px;
      border-radius: inherit;
      &:active,
      &:focus-visible {
        outline: none;
      }
    }

    input {
      border-bottom: 1px solid #555;
      padding: 9px 4px 9px 40px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 8px center;
    }
  }

  .status-filter,
  .type-filter {
    flex-shrink: 2;
  }
  .area-filter,
  .status-filter,
  .type-filter {
    position: relative;

    a {
      border-bottom: 1px solid #555;
      font-size: 14px;
      display: inline-block;
      color: #555;

      line-height: 22px;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    span {
      display: inline-block;
      padding: 5px 10px 7px 10px;
      white-space: nowrap;
    }
    p {
      margin: 0;
    }
  }

  .multiSelect {
    z-index: 2;
    position: relative;
    &.show {
      display: block;
    }
    &.hide {
      display: none;
    }
    ul {
      list-style: none;
      margin-top: -1px;
      background-color: rgb(32, 32, 32);
      border: 0;
      color: #fff;
      position: absolute;
      padding-top: 10px;
      padding-bottom: 10px;
      top: -2px;
      width: 200px;
      max-height: 100px;
      overflow: auto;
      li {
        margin-left: -32px;
        input {
          margin-right: 8px;
          accent-color: var(--secondary);
        }
      }
    }
  }

  .project-grid {
    height: 82vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    column-gap: 2.3rem;
    row-gap: 2rem;
  }
  /* @media screen and (min-width: 1800px) {
    .project-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  } */
`;

const RightColumn = ({ projects }) => {
  const [page, setPage] = useState(0);
  const [numRes, setNumRes] = useState(projects.length);
  const [areaDropdown, setAreaDropdown] = useState([]);
  const [selectedAreaDropdown, setSelectedAreaDropdown] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [openAreaDropdown, setOpenAreaDropdown] = useState(false);
  const [openStatusDropdown, setOpenStatusDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [openTypeDropdown, setOpenTypeDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // OnClick Handlers for changing pages/pagination
  const nextPage = () => {
    setPage((prev) => (prev + 1 < projects.length / 8 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  //Puts checked areas to the selected areas list and removes them when unchecked
  const selectedAreaCD = (e) => {
    if (e.target.checked) {
      setSelectedAreaDropdown((prev) => {
        if (prev.length != 0) {
          return [...prev, e.target.value];
        } else {
          return [e.target.value];
        }
      });
    } else {
      setSelectedAreaDropdown((prev) =>
        prev.filter((item) => item != e.target.value)
      );
    }
    // setOpenAreaDropdown(false);
  };

  //Sets the projects to be displayed based on the filters
  const memo = useMemo(() => {
    let selected = projects;

    if (searchValue != "") {
      selected =
        selected.length != 0 &&
        selected.filter((project) => {
          return project.name.toLowerCase().includes(searchValue);
        });
    }

    if (selectedAreaDropdown.length != 0) {
      selected =
        selected.length != 0 &&
        selected.filter((project) => {
          return selectedAreaDropdown.some((area) => {
            return project.project_area === area;
          });
        });
    }
    if (selectedType != "") {
      selected =
        selected.length != 0 &&
        selected.filter((project) => {
          return (
            project.type.toLowerCase() === selectedType.toLocaleLowerCase()
          );
        });
    }
    if (selectedStatus != "") {
      selected =
        selected.length != 0 &&
        selected.filter((project) => {
          return project.status.toLowerCase() === selectedStatus.toLowerCase();
        });
    }

    setSelectedProjects(selected);
  }, [
    selectedAreaDropdown,
    projects,
    selectedStatus,
    selectedType,

    searchValue,
  ]);

  //Determines the options to display in the property area filter
  useEffect(() => {
    let temp = areaDropdown;
    if (temp) {
      projects.forEach((item) => {
        if (!temp.includes(item.project_area)) {
          temp = [...temp, item.project_area];
        }
      });
      setAreaDropdown(temp.sort());
    }
  }, [projects, areaDropdown]);

  // useEffect(() => {
  //   setSelectedProjects((prev) =>
  //     searchValue
  //       ? projects.filter((project) => {
  //           return project.name.toLowerCase().includes(searchValue);
  //         })
  //       : projects
  //   );
  // }, [projects, searchValue]);

  return (
    <RightWrapper>
      <div className="filter-wrapper">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* <h1>
          <span>{numRes}</span> Results Found
        </h1> */}

        <div
          className="area-filter"
          onFocus={(e) => {
            console.log(" target", e);
            setOpenAreaDropdown(true);
            setOpenTypeDropdown(false);
            setOpenStatusDropdown(false);
          }}
          onBlur={(e) => {
            console.log("Not a target", e);
            if (!e.relatedTarget) {
              setOpenAreaDropdown(false);
            }
          }}
        >
          <a href="#">
            <span>
              {selectedAreaDropdown.length == 0
                ? "Select Property Area"
                : selectedAreaDropdown.join(", ")}
            </span>
          </a>

          <div className={`multiSelect ${openAreaDropdown ? "show" : "hide"}`}>
            <ul>
              {areaDropdown &&
                areaDropdown.map((item, index) => {
                  return (
                    <li key={index}>
                      <input
                        type="checkbox"
                        value={item}
                        onChange={selectedAreaCD}
                        id={item.charAt(0).toUpperCase() + item.slice(1)}
                      />
                      <label
                        htmlFor={item.charAt(0).toUpperCase() + item.slice(1)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </label>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div
          className="type-filter"
          onFocus={(e) => {
            setOpenTypeDropdown(true);
            setOpenAreaDropdown(false);
            setOpenStatusDropdown(false);
          }}
          onBlur={(e) => {
            if (!e.relatedTarget) {
              setOpenTypeDropdown(false);
            }
          }}
        >
          <a href="#">
            <span>
              {selectedType == "" ? "Select Property Type" : selectedType}
            </span>
          </a>

          <form className={`multiSelect ${openTypeDropdown ? "show" : "hide"}`}>
            <ul>
              <li>
                <input
                  type="radio"
                  id="Apartment"
                  name="project_type"
                  value="Apartment"
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                />
                <label for="Apartment">Apartment</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="House"
                  name="project_type"
                  value="House"
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                />
                <label for="House">House</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="Land"
                  name="project_type"
                  value="Land"
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                />
                <label for="Land">Land</label>
              </li>
            </ul>
          </form>
        </div>
        <div
          className="status-filter"
          onFocus={(e) => {
            setOpenStatusDropdown(true);
            setOpenTypeDropdown(false);
            setOpenAreaDropdown(false);
          }}
          onBlur={(e) => {
            if (!e.relatedTarget) {
              setOpenStatusDropdown(false);
            }
          }}
        >
          <a href="#">
            <span>
              {selectedStatus == "" ? "Select Status" : selectedStatus}
            </span>
          </a>

          <form
            className={`multiSelect ${openStatusDropdown ? "show" : "hide"}`}
          >
            <ul>
              <li>
                <input
                  type="radio"
                  id="ongoing"
                  name="project_status"
                  value="Ongoing"
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                  }}
                />
                <label htmlFor="ongoing">Ongoing</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="Completed"
                  name="project_status"
                  value="Completed"
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                  }}
                />
                <label htmlFor="completed">Completed</label>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="project-grid">
        {selectedProjects &&
          selectedProjects
            .slice(page * 8, page * 8 + 8)
            .map((obj, index) => (
              <FeaturedProject
                className="grid-cell"
                key={index}
                project={obj}
              />
            ))}
      </div>
      <div className="btn-container">
        <Btn
          moveSlide={prevPage}
          direction="prev"
          backgroundColor="none"
          arrowColor="black"
          hoverColor="var(--secondary)"
        />
        <Btn
          moveSlide={nextPage}
          direction="next"
          backgroundColor="none"
          arrowColor="black"
          hoverColor="var(--secondary)"
        />
      </div>
    </RightWrapper>
  );
};

export default RightColumn;
