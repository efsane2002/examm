
import { Helmet } from "react-helmet";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { deleteProjectsByID, getAllProjects } from "../../api/request";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function Blog() {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getAllProjects().then((data) => {
      setDatas(data);
      console.log(data);
    });
  }, []);

  function handleSearch(e) {
    setInput(e.target.value);
  }

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProjectsByID(id);
        setDatas(datas.filter((x) => x._id !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  return (
    <>
      <Helmet>
        <title>Blog page</title>
      </Helmet>

      <div className="search-sort" style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>
        <TextField
          onChange={(e) => handleSearch(e)}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
       
      </div>
      <section  style={{paddingTop:"30px",display:"flex",gap:"20px",justifyContent:"center"}} >
        {datas &&
          datas
            .filter((item) => {
              if (input === "") {
                return datas;
              } else if (
                item.name
                  .toLowerCase()
                  .trim()
                  .includes(input.toLowerCase().trim())
              ) {
                return item;
              }
            })
            .map((d) => (
              <Card
                key={d._id}
                hoverable="true"
                style={{
                  width: 320,
                }}
              >
                <div className={style.div2} style={{width:"60px",height:"60px",border:"1px solid #28B6E8",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"}}><i className={d.icon} style={{fontSize:"22px"}}></i></div>
                <div className="datas">
                <h2 style={{textAlign:"center"}}>{d.name}</h2>
                <p style={{textAlign:"center"}} >{d.paragraf}</p>
                </div>
                <div className="error-outlined"style={{textAlign:"center"}} >
                  <button style={{width:"130px",height:"40px",backgroundColor:"red",border:"none",marginRight:"10px",marginTop:"20px"}}
                    onClick={() => handleDelete(d._id)}
                    className="btn-dlt"
                  >
                    Delete
                  </button>
                  <Link to={`/details/${d._id}`}><button className={style.btn} style={{backgroundColor:"#26B7E7",border:"none",width:"130px",height:"40px",color:"white"}}>LEARN MORE</button></Link>
                </div>
              </Card>
            ))}
      </section>
    </>
  );
}

export default Blog;
