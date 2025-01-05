import React from "react";
import styled from "styled-components";
import SingleProjectListItem from "./SingleProjectListItem";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import ProjectFilterModal from "./ProjectFilterModal";
import MobileProject from "./MobileProject";

const RightWrapper = styled.div`
  background-color: #efefef;
  width: 100%;
  position: relative;
  height: 100%;
  padding: 30px 20px 50px;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .filterChipContainer {
    display: flex;
    gap: 10px;
    color: orange;
  }
  .filter-wrapper {
    display: flex;
    align-items: flex-end;
    gap: 30px;
    .search-input {
      width: 100%;
    }

    .filter-btn {
      cursor: pointer;
      display: flex;
      gap: 2px;
      border: 1px solid black;
      background: transparent;
      align-items: center;
      justify-content: center;
      padding: 6px 25px;
      p {
        margin: 0;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
    padding: 30px 40px;
    padding-right: calc(100vw * 0.025);
  }
`;
const RightColumn = ({ projects }) => {
  const [areaDropdown, setAreaDropdown] = useState([]);
  const [selectedAreaDropdown, setSelectedAreaDropdown] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);

  const FilterChips = () => {
    if (selectedAreaDropdown.length || selectedType.length) {
      return (
        <div className="filterChipContainer">
          {selectedAreaDropdown?.map((val, index) => (
            <Chip
              label={val}
              key={index}
              variant="outlined"
              color="primary"
              onDelete={() =>
                setSelectedAreaDropdown((prev) =>
                  prev.filter((item) => item != val)
                )
              }
            />
          ))}
          {selectedType?.map((val, index) => (
            <Chip
              label={val}
              key={index}
              color="primary"
              variant="outlined"
              onDelete={() =>
                setSelectedType((prev) => prev.filter((item) => item != val))
              }
            />
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
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
    if (selectedType.length != 0) {
      selected =
        selected.length != 0 &&
        selected.filter((project) => {
          return selectedType.some((type) => {
            return project.type.toLowerCase() === type.toLocaleLowerCase();
          });
        });
    }
    setSelectedProjects(selected);
  }, [selectedAreaDropdown, projects, selectedType, searchValue]);

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
        <TextField
          className="search-input"
          label="Search"
          variant="standard"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            setSearchValue(e.target.value) &&
            e.target.blur()
          }
        />
        <button className="filter-btn" onClick={() => setShowFilterModal(true)}>
          <FilterAltOutlinedIcon />
          <p>Filter</p>
        </button>
      </div>
      <FilterChips />
      {selectedProjects.map((singleProject, index) => (
        <SingleProjectListItem singleProjectInfo={singleProject} key={index} />
      ))}

      {showFilterModal &&
        createPortal(
          <ProjectFilterModal
            areaDropdown={areaDropdown}
            setSelectedAreaDropdown={setSelectedAreaDropdown}
            setSelectedType={setSelectedType}
            setShowFilterModal={setShowFilterModal}
          />,
          document.body
        )}

    </RightWrapper>
  );
};

export default RightColumn;
