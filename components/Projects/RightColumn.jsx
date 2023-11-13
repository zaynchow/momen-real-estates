import styled from "styled-components";
import FeaturedProject from "./FeaturedProject";
import { useState, useEffect, useMemo } from "react";
import Btn from "../../utils/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Image from "next/image";

//TODO: ALl dropdowns dont work in Safari. OnFocus attribute is not supported on Safari

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
    margin-top: -3px;

    /* min-width: 2vw; */


    /* input {
      border-bottom: 1px solid #555;
      padding: 9px 4px 9px 40px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 8px center;
    } */ */
  }
  .search-placeholder {
    display: flex;
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
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RightColumn = ({ projects }) => {
  const [page, setPage] = useState(0);
  const [numRes, setNumRes] = useState(projects.length);
  const [areaDropdown, setAreaDropdown] = useState([]);
  const [selectedAreaDropdown, setSelectedAreaDropdown] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  // const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
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
          return project.name
            .toLowerCase()
            .includes(searchValue?.toLowerCase());
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
          return selectedType.some((type) => {
            return project.type.toLowerCase() === type.toLocaleLowerCase();
          });
        });
    }
    // if (selectedStatus != "") {
    //   selected =
    //     selected.length != 0 &&
    //     selected.filter((project) => {
    //       return project.status.toLowerCase() === selectedStatus.toLowerCase();
    //     });
    // }

    setSelectedProjects(selected);
  }, [selectedAreaDropdown, projects, selectedType, searchValue]);

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

  return (
    <RightWrapper>
      <div className="filter-wrapper">
        <Autocomplete
          freeSolo
          className="search"
          options={projects.map((project) => project.name)}
          style={{ width: 500 }}
          value={searchValue}
          blurOnSelect
          onChange={(event, value) => setSearchValue(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              variant="standard"
              onKeyDown={(e) =>
                e.key === "Enter" &&
                setSearchValue(e.target.value) &&
                e.target.blur()
              }
            />
          )}
        />

        <Autocomplete
          multiple
          size="small"
          className="area-filter"
          clearOnBlur
          id="tags-standard"
          options={areaDropdown}
          disableCloseOnSelect
          getOptionLabel={(option) =>
            option.charAt(0).toUpperCase() + option.slice(1)
          }
          onChange={(event, value) => setSelectedAreaDropdown(value)}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Area" variant="standard" />
          )}
        />
        <Autocomplete
          multiple
          size="small"
          className="area-filter"
          clearOnBlur
          id="tags-standard"
          options={["Apartment", "House", "Land"]}
          disableCloseOnSelect
          onChange={(event, value) => setSelectedType(value)}
          getOptionLabel={(option) =>
            option.charAt(0).toUpperCase() + option.slice(1)
          }
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Property Type"
              variant="standard"
            />
          )}
        />
        {/* <div
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
        </div> */}
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
