import "./styles.css";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [hello, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => setState(res.data));
  }, []);

  console.log(hello);
  return (
    <div>
      <Table>
        <thead>
          <tr className="head">
            <th>Title</th>
            <th>price</th>
            <th>description</th>
            <th>Image</th>
          </tr>
        </thead>
        {hello.map((item, index) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  src={item.image}
                  style={{ width: "50px" }}
                  alt={item.title}
                />{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}


