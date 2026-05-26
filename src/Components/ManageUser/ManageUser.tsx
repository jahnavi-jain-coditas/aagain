import ManageUserHeader from "../ManageUserHeader/ManageUserHeader";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./ManageUser.module.scss"
import RoleBasedFilter from "../RoleBasedFilter/RoleBasedFilter";
import StatusBasedFilter from "../StatusBasedFilter/StatusBasedFilter";
import SortingDropDown from "../SortingDropDown/SortingDropDown";
import Button from "../Button/Button";
import Table from "../Table/Table";
const ManageUser = () => {
  return (
    <div className={styles.manageUserPage}>
      <ManageUserHeader />
      <div className={styles.searchAndFilter}>
        <SearchBar />
        <RoleBasedFilter />
        <StatusBasedFilter/>
        <SortingDropDown/>
      </div>
      <main>
        <Table>

          <Table.TableHead>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Deleted</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
               <Table.HeaderCell>Actions</Table.HeaderCell>
              

            </Table.Row>

          </Table.TableHead>

          <Table.TableBody>

            {/* {state.fetchedData.map((examDetails: fetchedExamCredentials,index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{examDetails.examination_date}</Table.Cell>
                  <Table.Cell>{examDetails.examination_type}</Table.Cell>
                  <Table.Cell>{examDetails.examination_slot_start_time}</Table.Cell>
                  <Table.Cell>{examDetails.examination_slot_end_time}</Table.Cell>
                  <Table.Cell>{examDetails.examination_slot_total_capacity}</Table.Cell>
                  <Table.Cell>{examDetails.examination_slot_available_capacity}</Table.Cell>
                  <Table.Cell><Button>VIEW CANDIDATES</Button></Table.Cell>
                


                </Table.Row>
              )
            })
            }
             */}


          </Table.TableBody>


        </Table>
       
        {/* <Button 
          onClick={() => dispatch({ type: "set_page_number", page_current: state.pageNumber - 1 })} disabled={state.pageNumber === 1}
        >Previous
        </Button>

        <Button 
          onClick={() => dispatch({ type: "set_page_number", page_current: state.pageNumber + 1 })}>Next
        </Button> */}


      </main>






    </div>


  )
}
export default ManageUser;