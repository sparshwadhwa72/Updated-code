import React, { useState } from 'react';
import { Container, Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import { Button } from '@material-ui/core';
import { Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@material-ui/core';

const DailyPlanner = ({setSelectedDate}) => {
  const agendas = [
    { time: '08:00 AM', event: 'Morning Exercise' },
    { time: '10:00 AM', event: 'Meeting with Team' },
    { time: '12:30 PM', event: 'Lunch Break' },
    { time: '03:00 PM', event: 'Client Presentation' },
    { time: '05:30 PM', event: 'Project Review' },
  ];

  
  const [selectedDay, setSelectedDay] = useState(null);

  
  const [selectedDay1, setSelectedDay1] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);
  
  const [toggleButtonColor, setToggleButtonColor] = useState('light');


  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleNextPage2 = () => {
    
    setSelectedDate2(selectedDay1);
    setCurrentPage(currentPage + 1);
  };

  const handleToggleButtonChange = (event, newColor) => {
    setToggleButtonColor(newColor);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleManageSessionDispense = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container 
    style={{
        margin: '0px 0px 0px 10px'
    }}
  >
      <Grid container
    >
        <Grid item container
        style={{
            
  background: "#FCFCFC",
  
  borderBottom: "1px solid #C6D9E7",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "10px 10px 0px 0px",
  
  height: "62px",
  width: '717px',
  marginTop: 40,
        }}><Typography style={{
          
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#BAB9B9",
  margin: '21px 0px 0px 20px'
        }}>HKT (GMT +08:00)</Typography>
          <Typography
          style={{
            justifyContent: 'center',
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",
  margin: '9px 0px 0px 180px'
          }}>Today</Typography>
        </Grid>
          <Grid 
          style={{
            
  height: "682px",
  boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.15)',
  width: '718px',
  
  background: "#F5F6F7"
          }}><Typography
          style={{
              marginTop: 32,
              
fontFamily: "'Roboto'",
fontStyle: "normal",
fontWeight: 700,
fontSize: "18px",
lineHeight: "21px",
display: "flex",
alignItems: "center",
color: "#216194",
marginLeft: 20,
          }}>25 May 2023, Thursday</Typography>
         
         <Grid
            style={{
                
  background: "#FFFFFF",
  border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '640px',
  height: '80px',
  margin: '24px 0px 0px 20px'

            }}>
                <Grid
                style={{
                    width: '146px',
                    height: '22px',

  background: "#F8BF80",
  borderRadius: "20px",
  margin: '8px 0px 0px 20px'
                }}>
                <Typography
                style={{
                    
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#FFFFFF",
                }}>Frequency changed </Typography>
                <Typography
                style={{
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  
  marginTop: 8
                }}>01:00 PM</Typography>
                <Typography
                style={{
                  width: "504px",
                  height: "16px",
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  color: "#BAB9B9",
  margin: '-17.5px 0px 0px 88px'
                }}>Frequency for paracetamol (ID: A34348) is change from Everyday to Every N da ...</Typography>
                </Grid>
                
            </Grid>
            
         <Grid
            style={{
                
  background: "#FFFFFF",
  border: "2px solid #fff",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '640px',
  height: '80px',
  margin: '20px 0px 0px 20px'

            }}>
                <Grid
                style={{
                    width: '140px',
                    height: '22px',

                    
  background: "#89C1B6",
  borderRadius: "20px",
  margin: '8px 0px 0px 20px'
                }}>
                <Typography
                style={{
                    
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#FFFFFF",
                }}>Dispensed on time</Typography>
                <Typography
                style={{
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  
  marginTop: 8
                }}>03:00 PM</Typography>
                <Typography
                style={{
                  width: "504px",
                  height: "16px",
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  color: "#BAB9B9",
  margin: '-17px 0px 0px 88px'
                }}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>
                
            </Grid>
            
         <Grid
            style={{
                
  background: "#FFFFFF",
  border: "2px solid #fff",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '640px',
  height: '80px',
  margin: '20px 0px 0px 20px'

            }}>
                <Grid
                style={{
                    width: '70px',
                    height: '22px',

                    
  background: "#E58A83",
  borderRadius: "20px",
  margin: '8px 0px 0px 20px'
                }}>
                <Typography
                style={{
                    
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#FFFFFF",
                }}>Missed</Typography>
                <Typography
                style={{
                  width: '80px',
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  
  marginTop: 8
                }}>06:00 PM</Typography>
                <Typography
                style={{
                  width: "504px",
                  height: "16px",
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  color: "#BAB9B9",
  margin: '-17px 0px 0px 88px'
                }}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>
                
            </Grid>
            <Grid>
            
            <Typography
            style={{
                margin: '32px 0px 0px 20px',
                
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  color: "#216194",
            }}>26 May 2023, Friday</Typography>
            
         <Grid
            style={{
                
  background: "#FFFFFF",
  border: "2px solid #fff",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '640px',
  height: '80px',
  margin: '24px 0px 0px 20px'

            }}>
                <Grid
                style={{
                    width: '97px',
                    height: '22px',

                    
                    
  background: "#F1F6FD",
  border: "1px solid #216194",
  borderRadius: "20px",
  margin: '8px 0px 0px 20px'
                }}>
                <Typography
                style={{
                   
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#216194",
                }}>To be taken</Typography>
                <Typography
                style={{
                  width: '80px',
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  
  marginTop: 8
                }}>08:00 PM</Typography>
                <Typography
                style={{
                  width: "504px",
                  height: "16px",
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  color: "#BAB9B9",
  margin: '-17px 0px 0px 88px'
                }}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>
                
            </Grid>
                
            <Grid
            style={{
                
  background: "#FFFFFF",
  border: "2px solid #fff",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '640px',
  height: '80px',
  margin: '20px 0px 0px 20px'

            }}>
                <Grid
                style={{
                    width: '182px',
                    height: '22px',

                    
                    
  background: "#F1F6FD",
  border: "1px solid #216194",
  borderRadius: "20px",
  margin: '8px 0px 0px 20px'
                }}>
                <Typography
                style={{
                   
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#216194",
                }}>Manual dispense session</Typography>
                <Typography
                style={{
                  width: '80px',
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  
  marginTop: 8
                }}>03:00 PM</Typography>
                <Typography
                style={{
                  width: "504px",
                  height: "16px",
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  color: "#BAB9B9",
  margin: '-17px 0px 0px 88px'
                }}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>
                
            </Grid>
                

       
            </Grid>
          </Grid>
       
      </Grid>
      <Grid
      style={{
        margin: '-750px 0px 0px 800px',
    
      }}
      >
      <Calendar  
      value={selectedDay} onChange={setSelectedDay} colorPrimary="#216194" />
      <Button
      style={{
        width: '335px',
        height: '80px',
  background: "#FFFFFF",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  marginTop: 24,
      }}
      
      onClick={handleManageSessionDispense}>
        <Typography style={{
          textTransform: 'none',
          
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "28px",
  textAlign: "center",
  color: "#216194",
        }}>Manage session dispense</Typography>
      </Button>
      
      <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{
            style: {
              width: '416px',
              height: '591px',
              borderRadius: '16px',
              boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
            },
          }}
        >
          {currentPage === 1 && (
            <>
              <DialogTitle
              style={{
                justifyContent: 'center',
                marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",
              }}>Dispense by session</DialogTitle>
              <DialogContent>
                <Typography
                style={{
                  justifyContent: 'center',
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
                }}>You have select the following session <br></br> for manual dispense:</Typography>
               
              </DialogContent>
              <DialogActions
              style={{
                justifyContent: 'center',
                marginBottom: 32,
              }}>
                <Button
                 style={{
                  
  background: "#F1F6FD",
  border: "2px solid #216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  width: '128px',
  height:'42px',
  textTransform: 'none',
                 }} onClick={handleCloseDialog}>Quit</Button>
                
                <Button 
                style={{
                  
  background: "#216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF",
  
  width: '128px',
  height:'42px',
  textTransform: 'none',
                }} onClick={handleNextPage}>Next</Button>
              </DialogActions>
            </>
          )}

       
{currentPage === 2 && (
            <>
              <DialogTitle
              style={{
                
                justifyContent: 'center',
                marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",
              }}>Dispense by session </DialogTitle>
              <DialogContent>
                
              <Typography
                style={{
                  justifyContent: 'center',
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
                }}>How would you like to dispense
               <br></br>  the session? </Typography>
               
                <DialogContentText>
                  {/* Add your dialog content for page 2 here */}
                  <ToggleButtonGroup
                    value={toggleButtonColor}
                    exclusive
                    onChange={handleToggleButtonChange}
                    style={{ marginTop: '32px' }}
                  >
                    <ToggleButton
                      value="light"
                      style={{
                        backgroundColor: toggleButtonColor === 'light' ? '#C6D9E7' : '#216194',
                        color: toggleButtonColor === 'light' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                        
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  textTransform: 'none',
  width: '295px',
  height: '33px',
  margin: '0px 0px 0px 40px'
                      }}
                    >
                     Dispense now
                    </ToggleButton>
                    <ToggleButton
                      value="dark"
                      style={{
                        backgroundColor: toggleButtonColor === 'dark' ? '#216194' : '#F1F6FD',
                        color: toggleButtonColor === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                             
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  textTransform: 'none',
  width: '295px',
  height: '33px',
  margin: '49px 0px 0px -294px'
                      }}
                    >
                     Schedule a dispense
                    </ToggleButton>
                  </ToggleButtonGroup>
                </DialogContentText>
              </DialogContent>
              <DialogActions
              style={{
                marginBottom: 32,
                justifyContent: 'center',
              }}>
                
              <Button
                 style={{
                  
  background: "#F1F6FD",
  border: "2px solid #216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  width: '128px',
  height:'42px',
  textTransform: 'none',
                 }} onClick={handlePreviousPage}>Back</Button>
                
                <Button 
                style={{
                  
  background: "#216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF",
  
  width: '128px',
  height:'42px',
  textTransform: 'none',
                }} onClick={handleNextPage}>Next</Button>
              </DialogActions>
            </>
          )}
           {currentPage === 3 && (
            <>
              <DialogTitle
              style={{
                justifyContent: 'center',
                marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",
              }}>Dispense by session</DialogTitle>
              <DialogContent>
                <DialogContentText>
                <Typography
                style={{
                  justifyContent: 'center',
                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
                }}>Please select the date for the <br></br>scheduled dispense.</Typography>
               <Grid
              style={{
                margin: '0px 0px 0px 25px'
              }}>
                
      <Calendar value={selectedDay1} onChange={setSelectedDay1} colorPrimary="#216194" />
      </Grid>
                </DialogContentText>
              </DialogContent>
             
              <DialogActions
              style={{
                marginBottom: 32,
                justifyContent: 'center',
              }}>
                
              <Button
                 style={{
                  
  background: "#F1F6FD",
  border: "2px solid #216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  width: '128px',
  height:'42px',
  textTransform: 'none',
                 }} onClick={handlePreviousPage}>Back</Button>
                
                <Button 
                style={{
                  
  background: "#216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF",
  
  width: '128px',
  height:'42px',
  textTransform: 'none',
                }} onClick={handleNextPage2}>Next</Button>
              </DialogActions>
            </>
          )}

          {currentPage === 4 && (
            <>
              <DialogTitle
              style={{
                justifyContent: 'center',
                marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",}}>Dispense by session</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  
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
              {selectedDate2 ? (
                <>
                  {selectedDate2.day}/{selectedDate2.month}/{selectedDate2.year}
                </>
              ) : (
                'None'
              )}
            </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions
              style={{
                justifyContent: 'center',
                marginBottom: 32,
              }}>
                <Button
                style={{
                  
  background: "#F1F6FD",
  border: "2px solid #216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  width: '128px',
  height:'42px',
  textTransform: 'none',
                }} onClick={handlePreviousPage}>Back</Button>
                <Button 
                style={{
                  
  background: "#216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF",
  
  width: '128px',
  height:'42px',
  textTransform: 'none',
                }}
                onClick={handleCloseDialog}>Confirm</Button>
              </DialogActions>
            </>
          )}
          
        </Dialog>
    <Grid
    style={{
        marginTop: 40,
        
  borderRadius: "16px 16px 0px 0px",
        
  background: "#89C1B6",
  border: "2px solid #216194",
  
  width: "335px",
  height: "64px",
  
    }}><Typography
    style={{
        marginTop: 22,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  alignItems: "center",
  textAlign: "center",
  color: "#FFFFFF",
    }}> Dispensed on time
        </Typography>
    </Grid>
    <Grid
    style={{
        height: '286px',
        
  background: "#fff",
  border: "2px solid #216194",
  
  width: "335px",
  
  boxSizing: "border-box",
  border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "0px 0px 16px 16px"
    }}>
        <Typography
        style={{
            
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  alignItems: "center",
  textAlign: "center",
  color: "#969696",
  marginTop: 13,
        }}>08:00 Tuesday, 09/05/2023</Typography>
        <Typography
        style={{
            
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",
  color: "#969696",
  marginLeft: 20,
  marginTop: 32,
        }}>Editor: Chan Tai Man</Typography>
        <Typography
        style={{
            
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",
  color: "#969696",
  marginLeft: 20,
  marginTop: 8,
        }}>Drug: Vitamin C (x1), Fish Oil (x2), Panadol (x1), Ultibo...</Typography>
        <Typography
        style={{
            
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",
  color: "#969696",
  marginLeft: 20,
  marginTop: 8,
        }}>Event: All drugs are dispensed on time</Typography>
    </Grid>
      </Grid>
    </Container>
  );
};

export default DailyPlanner;
