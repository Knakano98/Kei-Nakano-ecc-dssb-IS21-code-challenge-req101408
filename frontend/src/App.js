import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      modal: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  //Function to fetch info from entries and rerender.
  refreshList = () => {
    axios
      .get("/api/entries/")
      .then((res) => this.setState({productList: res.data }))
      .catch((err) => console.log(err));
  };

  createItem = () => {
    //Create new product, Agile as default because it's the default option in the drop down.
    const item = {name:"",
                  scrum_master: "",
                  product_owner: "",
                  start_date:"",
                  methodology:"Agile",
                  location:"",
                  dev_name1:"",
                  dev_name2:"" ,
                  dev_name3:"" ,
                  dev_name4:"" ,
                  dev_name5:"" ,};
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    //Checks for making sure very needed input is not blank.
    if (item.name=="" || item.scrum_master=="" || item.product_owner=="" || item.start_date=="" || item.location==""){
      alert("Please fill in every category.")
    }
    else if (item.dev_name1=="" &  item.dev_name2=="" &  item.dev_name3=="" &  item.dev_name4=="" &  item.dev_name5=="" ) {
      alert("Please enter at least one developer name.")
    }
    else{
      this.toggle();
      //Put item and refresh if item has an id, so if it's being edited.
      if (item.id) {
       axios
         .put(`/api/entries/${item.id}/`, item)
         .then((res) => this.refreshList());
       return;
     }
     //No id, so new item is being created.
     axios
       .post("/api/entries/", item)
       .then((res) => this.refreshList());
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-black text-uppercase text-center my-4">ECC Products</h1>
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
                Total products: {this.state.productList.length}
              </div>
              <table border="1">
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
                      <td>{ item.dev_name1 } <br />
                          { item.dev_name2 } <br />
                          { item.dev_name3 } <br />
                          { item.dev_name4 } <br />
                          { item.dev_name5 } <br /></td>
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
