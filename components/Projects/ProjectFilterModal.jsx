import React from "react";
import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "../lib/Button";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ProjectFilterModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .ProjectFilterModalContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #efefef;
    padding: 3rem;
    .ProjectFilterModalInputs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > div {
        width: 100% !important;
      }
    }
  }

  .btn-container {
    display: flex;
    align-self: flex-end;
    gap: 10px;
  }
  @media only screen and (min-width: 768px) {
    .ProjectFilterModalContainer {
      height: 500px;
      width: 800px;
    }
  }
`;

const ProjectFilterModal = ({
  setSelectedType,
  setSelectedAreaDropdown,
  areaDropdown,
  setShowFilterModal,
}) => {
  let areaFilterFinalVal = [];
  let typeFilterFinalVal = [];
  return (
    <ProjectFilterModalWrapper>
      <div className="ProjectFilterModalContainer">
        <div className="ProjectFilterModalInputs">
          <h1>Filter Properties</h1>
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
            onChange={(event, value) => {
              areaFilterFinalVal = value;
            }}
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
            onChange={(event, value) => {
              typeFilterFinalVal = value;
            }}
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
        </div>
        <div className="btn-container">
          <Button
            onClick={() => {
              setShowFilterModal(false);
            }}
            light
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setShowFilterModal(false);
              setSelectedAreaDropdown(areaFilterFinalVal);
              setSelectedType(typeFilterFinalVal);
            }}
          >
            Apply filters
          </Button>
        </div>
      </div>
    </ProjectFilterModalWrapper>
  );
};

export default ProjectFilterModal;
