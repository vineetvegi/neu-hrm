import React, {Component} from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Staff extends Component {

    state = {
        staffs: [],
        newStaffData: {
            id: '',
            staff_name: '',
            phone: '',
            // image: '',
            title: '',
            email: ''
            },
        editStaffData: {
            id: '',
            staff_name: '',
            phone: '',
            // image: '',
            title: '',
            email: ''
            },
        newStaffModal: false,
        editStaffModal: false
    }

    componentDidMount() {
        this._refreshedStaffList();
    }

    toggleNewStaffModal() {
        this.setState({
            newStaffModal: ! this.state.newStaffModal
        });
    }

    toggleEditStaffModal() {
        this.setState({
            editStaffModal: ! this.state.editStaffModal
        });
    }

    addStaff() {
        axios.post('http://localhost:5000/staff/add', this.state.newStaffData).then((res) => {
            console.log(res.data)
            let { staffs } = this.state;
            staffs.staff.push(res.data);

            this.setState({ staffs, newStaffModal:false, newStaffData: {
                                                                        id: '',
                                                                        staff_name: '',
                                                                        phone: '',
                                                                        // image: '',
                                                                        title: '',
                                                                        email: ''
            }});
        });
    }

    updateStaff() {
        let {id, staff_name, phone, title, email} = this.state.editStaffData;
        axios.post('http://localhost:5000/staff/update', this.state.editStaffData).then((res) => {
            this._refreshedStaffList();

            this.setState({
                editStaffModal: false, editStaffData: {
                                                        id: '',
                                                        staff_name: '',
                                                        phone: '',
                                                        // image: '',
                                                        title: '',
                                                        email: ''
                 }
            })
        });
    }

    editStaff(id, staff_name, phone, title, email) {
        this.setState({
            editStaffData: { id, staff_name, phone, title, email },
            editStaffModal: !this.state.editStaffModal
        });
    }

    deleteStaff(id) {
        axios.delete('http://localhost:5000/staff/delete/' + id).then((res) => {
            this._refreshedStaffList();
        });
    }

    _refreshedStaffList() {
        axios.get('http://localhost:5000/staff').then((res) => {
            console.log(res.data)
            this.setState({
                staffs: res.data
            })
        });
    }
  render () {
    //   console.log(this.state.events.rows)
      let staff = [];
      if (this.state.staffs.staff) {
          staff = this.state.staffs.staff.map((person) => {
            //   console.log(event.event_id)
          return (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.staff_name}</td>
                    <td>{person.phone}</td>
                    {/* <td>{person.image}</td> */}
                    <td>{person.title}</td>
                    <td>{person.email}</td>
                    <td>
                        <button color="success" size="sm" className="mr-2" onClick={this.editStaff.bind(this, person.id, person.staff_name, person.phone, person.title, person.email)}>Edit</button>
                        <button color="danger" size="sm" onClick={this.deleteStaff.bind(this, person.id)}>Delete</button>
                    </td>
                </tr>
          )
      });
      }
      return (
          <div className="Staff container">
          <br />
       <Modal isOpen={this.state.newStaffModal} toggle={this.toggleNewStaffModal.bind(this)}>
            <ModalHeader toggle={this.toggleNewStaffModal.bind(this)}>Add new Staff Members</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="id">ID</Label>
                    <Input type="number" id="id" value={this.state.newStaffData.id} onChange={(e) => {
                        let { newStaffData } = this.state;
                        newStaffData.id = e.target.value;
                        this.setState({newStaffData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" value={this.state.newStaffData.staff_name} onChange={(e) => {
                        let { newStaffData } = this.state;
                        newStaffData.staff_name = e.target.value;
                        this.setState({newStaffData});
                    }}    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="phone" id="phone" value={this.state.newStaffData.phone} onChange={(e) => {
                        let { newStaffData } = this.state;
                        newStaffData.phone = e.target.value;
                        this.setState({newStaffData});
                    }}  />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="img">Image</Label>
                    <Input type="file" id="img" value={this.state.newStaffData.image} onChange={(e) => {
                        let { newStaffData } = this.state;
                        newStaffData.image = e.target.value;
                        this.setState({newStaffData});
                    }} />
                </FormGroup> */}
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" id="title" value={this.state.newStaffData.title} onChange={(e) => {
                        let { newStaffData } = this.state;
                        newStaffData.title = e.target.value;
                        this.setState({newStaffData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" value={this.state.newStaffData.email} onChange={(e) => {
                        let { newStaffData } = this.state;
                        newStaffData.email = e.target.value;
                        this.setState({newStaffData});
                    }} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.addStaff.bind(this)}>Add a Staff Member</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewStaffModal.bind(this)}>Cancel</Button>
            </ModalFooter>
        </Modal>

       <Modal isOpen={this.state.editStaffModal} toggle={this.toggleEditStaffModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditStaffModal.bind(this)}>Edit Staff</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="id">ID</Label>
                    <Input type="number" id="id" value={this.state.editStaffData.id} onChange={(e) => {
                        let { editStaffData } = this.state;
                        editStaffData.id = e.target.value;
                        this.setState({editStaffData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" value={this.state.editStaffData.staff_name} onChange={(e) => {
                        let { editStaffData } = this.state;
                        editStaffData.staff_name = e.target.value;
                        this.setState({editStaffData});
                    }}    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="tel" id="tel" value={this.state.editStaffData.phone} onChange={(e) => {
                        let { editStaffData } = this.state;
                        editStaffData.phone = e.target.value;
                        this.setState({editStaffData});
                    }}  />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="img">Image</Label>
                    <Input type="file" id="img" value={this.state.editStaffData.image} onChange={(e) => {
                        let { editStaffData } = this.state;
                        editStaffData.image = e.target.value;
                        this.setState({editStaffData});
                    }} />
                </FormGroup> */}
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" id="title" value={this.state.editStaffData.title} onChange={(e) => {
                        let { editStaffData } = this.state;
                        editStaffData.title = e.target.value;
                        this.setState({editStaffData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" value={this.state.editStaffData.email} onChange={(e) => {
                        let { editStaffData } = this.state;
                        editStaffData.email = e.target.value;
                        this.setState({editStaffData});
                    }} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.updateStaff.bind(this)}>Edit the Staff Details</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditStaffModal.bind(this)}>Cancel</Button>
            </ModalFooter>
        </Modal>

          <Table bordered striped >
              <thead style={{width: '100%'}}>
                  <tr>
                      <th style={{width: '1%'}}>#</th>
                      <th style={{width: '25%'}}>NAME</th>
                      <th style={{width: '10%'}}>PHONE</th>
                      {/* <th style={{width: '12%'}}>IMG</th> */}
                      <th style={{width: '10%'}}>Title</th>
                      <th style={{width: '10%'}}>Email</th>
                      <th style={{width: '15%'}}>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
              {staff}
              </tbody>
          </Table>
          <br />
          <div className="text-center">
          <Button color="secondary" onClick={this.toggleNewStaffModal.bind(this)}>Add a Staff Member</Button>
          </div>
          </div>
      );

  }

}

export default Staff
















//   constructor(props) {
//         super(props);
//         this.state = {
//             event: [],
//             loading: true,
//         }
//     }





    // async componentDidMount() {
    //     const url = "http://localhost:5000/";
    //     const response = await fetch(url);
    //     console.log(response)
    //     const data = await response.json();
    //     this.setState({event: data.rows, loading: false});
    //     console.log(data.rows);
    // }

//     render() {
//         // if(this.state.loading) {
//         //     return <div>loading...</div>
//         // }
//         // if(!this.state.event.length) {
//         //     return <div>Didn't get any event</div>
//         // }
//         const columns = [
//             {
//                 dataField: "event_id",
//                 text: "ID"
//             },
//             {
//                 dataField: "event_name",
//                 text: "NAME",
//                 maxWidth: 100
//             },
//             {
//                 dataField: "event_time",
//                 text: "TIME"
//             },
//             {
//                 dataField: "event_date",
//                 text: "DATE"
//             },
//             {
//                 dataField: "event_url",
//                 text: "URL"
//             },
//             {
//                 text: "EDIT"
//             }
//         ]
//         return (
//         <div className="profile">
//             <BootstrapTable
//             keyField="event_id"
//             data={this.state.event}
//             columns={columns}
//         />
//         </div>
// );
//     }

