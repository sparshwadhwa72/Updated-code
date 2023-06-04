import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import useStyles from './form-components/text-input/text-input.styles';

import { InputAdornment } from '@material-ui/core';

const Dispense = ({  }) => {
  const { watch } = useFormContext();

  const [selectedDay, setSelectedDay] = useState(null);
  
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false); // State to control the dialog visibility
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page of the dialog

  const handleDispenseClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setCurrentPage(1);
  };
  

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


  
  const handleNext = () => {
    setSelectedDate(selectedDay);
    
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Grid container item direction="column">
      <br />
      <br />
      <br />
      <Grid item container direction="column">
        <Button
          style={{
            width: '416px',
            height: '80px',
            borderRadius: '16px',
            background: '#FFFFFF',
            boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
            textAlign: 'center',
            fontFamily: 'Roboto',
            textTransform: 'none',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '28px',
            color: '#216194',
          }}
          onClick={handleDispenseClick}
        >
          Dispense now
        </Button>
        <Button
          style={{
            width: '416px',
            marginTop: 19,
            height: '80px',
            borderRadius: '16px',
            background: '#FFFFFF',
            boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
            textAlign: 'center',
            fontFamily: 'Roboto',
            textTransform: 'none',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '28px',
            color: '#216194',
          }}
          onClick={handleDispenseClick}
        >
          Schedule a dispense
        </Button>
      </Grid>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        PaperProps={{
          style: {
            width: '416px',
            height: '700px',
            borderRadius: '16px',
            boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
          },
        }}
      >
        {currentPage === 1 && (
          <>
            <DialogTitle style={{ color: '#216194', textAlign: 'center',
          marginTop: 25, }}>
            Schedule dispense
            </DialogTitle>
            <DialogContent>
              <Typography
              style={{
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
              }}>Please select the date for the<br></br> scheduled remote dispense.</Typography>
              <Grid
              style={{
                margin: '0px 0px 0px 25px'
              }}>
                
      <Calendar value={selectedDay} onChange={setSelectedDay} colorPrimary="#216194" />
      </Grid>

            </DialogContent>
            <DialogActions style={{ justifyContent: 'center', marginBottom: 32 }}>
              <Button
                style={{
                  color: '#216194',
                  borderColor: '#216194',
                  borderRadius: '16px',
                  borderWidth: '2px',
                  backgroundColor: '#f1f6fd',
                  textTransform: 'none',
                  width: '80px',
                  height: '42px',
                }}
                variant="outlined"
                onClick={handleDialogClose}
              >
                Quit
              </Button>
              <Button
                style={{
                  borderRadius: '16px',
                  color: '#fff',
                  backgroundColor: '#216194',
                  textTransform: 'none',
                  width: '80px',
                  height: '42px',
                }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            </DialogActions>
          </>
        )}

{currentPage === 2 && (
        <>
          <DialogTitle style={{ color: '#216194', textAlign: 'center' ,
         marginTop: 31}}>
           Schedule dispense
          </DialogTitle>
          <DialogContent>
            <Typography
            style={{
              
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  
  color: '#BAB9B9',
            }}>Please select the time for the drug to </Typography>
            
            <Typography
            style={{
              
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "left",
  
  color: '#BAB9B9',
  marginLeft: 70,
            }}>be dispensed on</Typography>
            <Typography
              style={{
                fontFamily: "'Roboto'",
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '21px',
                textAlign: 'center',
                color: '#BAB9B9',
                margin: '-20px 0px 0px 130px'
              }}
            >
              {selectedDate ? (
                <>
                  {selectedDate.day}/{selectedDate.month}/{selectedDate.year}
                </>
              ) : (
                'None'
              )}
            </Typography>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center', marginBottom: 32 }}>
              <Button
                style={{
                  color: '#216194',
                  borderColor: '#216194',
                  borderRadius: '16px',
                  borderWidth: '2px',
                  backgroundColor: '#f1f6fd',
                  textTransform: 'none',
                  width: '80px',
                  height: '42px',
                }}
                variant="outlined"
                onClick={handlePreviousPage}
              >
                Back
              </Button>
              <Button
                style={{
                  borderRadius: '16px',
                  color: '#fff',
                  backgroundColor: '#216194',
                  textTransform: 'none',
                  width: '80px',
                  height: '42px',
                }}
                variant="contained"
                onClick={handleNextPage}
              >
                Next
              </Button>
            </DialogActions>
          </>
        )}

        {currentPage === 3 && (
          <>
            <DialogTitle style={{ color: '#216194', textAlign: 'center' ,
          marginTop: 31}}>
              Schedule dispense
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions style={{ justifyContent: 'center', marginBottom: 32 }}>
              <Button
                style={{
                  color: '#216194',
                  borderColor: '#216194',
                  borderRadius: '16px',
                  borderWidth: '2px',
                  backgroundColor: '#f1f6fd',
                  textTransform: 'none',
                  width: '80px',
                  height: '42px',
                }}
                variant="outlined"
                onClick={handlePreviousPage}
              >
                Back
              </Button>
              <Button
                style={{
                  borderRadius: '16px',
                  color: '#fff',
                  backgroundColor: '#216194',
                  textTransform: 'none',
                  width: '80px',
                  height: '42px',
                }}
                variant="contained"
                onClick={handleDialogClose}
              >
                Confirm
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Grid>
  );
};

export default Dispense;
