import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";


//Dummy data for testing
const entries = [
  {
    id: 1,
    name:"name",
    scrum_master: "scrum master",
    product_owner: "product owner",
    start_date:"11/11/1111",
    methodology:"waterfall",
    location:"location",
    dev_names:"John Doe;Jon Do;Jan Do"
  },
  {
    id:2,
    name:"name",
    scrum_master: "scrum master",
    product_owner: "product owner",
    start_date:"11/11/1111",
    methodology:"waterfall",
    location:"location",
    dev_names:"devnames"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //productList: [entries],
      productList: [],
      modal: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/entries/")
      .then((res) => this.setState({productList: res.data }))
      .catch((err) => console.log(err));
  };

  createItem = () => {
    const item = {name:"",
                  scrum_master: "",
                  product_owner: "",
                  start_date:"",
                  methodology:"",
                  location:"",
                  dev_names:"" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    console.log(item)
    this.toggle();
    if (item.id) {
     axios
       .put(`/api/entries/${item.id}/`, item)
       .then((res) => this.refreshList());
     return;
   }

   console.log("should run")
   axios
     .post("/api/entries/", item) //this is 400ing for some reason
     .then((res) => this.refreshList());
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">ECC Products</h1>
        <div className="row">
          <div className="col-md-60 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add Product
                </button>
              </div>
              <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Scrum Master</th>
                  <th>Product Owner</th>
                  <th>Start Date</th>
                  <th>Methodology</th>
                  <th>Location</th>
                  <th>Developer Names</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {this.state.productList.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{ item.id }</td>
                      <td>{ item.name }</td>
                      <td>{ item.scrum_master }</td>
                      <td>{ item.product_owner }</td>
                      <td>{ item.start_date }</td>
                      <td>{ item.methodology }</td>
                      <td>{ item.location }</td>
                      <td>{ item.dev_names }</td>
                      <button
                         className="btn btn-primary"
                         onClick={() => this.editItem(item)}
                       >
                         Edit
                       </button>
                    </tr>
                  );
                })}

              </tbody>
            </table>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
