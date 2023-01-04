import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

const ProfileChanger = (props) => {
  const { file, handleChange } = props;

  const hiddenFileInput = React.useRef(null);

  return (
    <div>
      <Box
        style={{
          paddingTop: "60px",
        }}
      >
        <Card
          sx={{
            width: "170px",
            boxShadow: "0 0px 0px rgba(0,0,0,0.16), 0 0px 0px rgba(0,0,0,0.23)",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            image={file}
            style={{
              width: 150,
              height: 150,
              margin: "10px",
              borderRadius: "5px",
            }}
          />
          <label
            for="fileSelect"
            style={{
              fontSize: "12px",
              marginLeft: "25px",
              justifyContent: "center",
              textDecoration:'line',
              cursor:'pointer'

            }}
          >
            change profile photo
          </label>

          <input
            id="fileSelect"
            ref={hiddenFileInput}
            type="file"
            onChange={handleChange}
            style={{
              display: "none",
              backgroundColor: "transparent",
              padding: "5px 8px",
              outline: "none",
              whiteSpace: "nowrap",
              WebkitUserSelect: "none",
              cursor: "pointer",
              textShadow: "1px 1px #fff",
              fontWeight: 700,
              fontSize: "10px",
            }}
          />
        </Card>
      </Box>
    </div>
  );
};

export default ProfileChanger;
