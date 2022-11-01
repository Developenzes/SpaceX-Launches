import { Input } from "@mui/material";

export default function SearchInput(props) {
    return <Input sx={{marginBottom: 4, padding: "6px 0",  minWidth: 200, fontSize:20}} placeholder="Search Launch..." {...props} />;
  }