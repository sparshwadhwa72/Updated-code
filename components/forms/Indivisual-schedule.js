import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';


const DailyPlanner = ({setSelectedDate}) => {
  const agendas = [
    { time: '08:00 AM', event: 'Morning Exercise' },
    { time: '10:00 AM', event: 'Meeting with Team' },
    { time: '12:30 PM', event: 'Lunch Break' },
    { time: '03:00 PM', event: 'Client Presentation' },
    { time: '05:30 PM', event: 'Project Review' },
  ];

  
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Container maxWidth="sm"
    style={{
        margin: '0px 0px 0px 10px'
    }}
  >
      <Grid container
    >
        <Grid
        style={{
            
  background: "#FCFCFC",
  borderRadius: "16px 16px 0px 0px",
  
  height: "64px",
  width: '728px',
  marginTop: 40,
        }}></Grid>
          <Grid 
          style={{
            
  height: "612px",
  boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.15)',
  width: '728px',
  
  background: "#F5F6F7"
          }}><Grid>
            <Typography
            style={{
                marginTop: 32,
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "23px",
  color: "#216194",
  marginLeft: 8
            }}>Today</Typography>
            <Typography
            style={{
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#BAB9B9",
  margin: '-20px 0px 0px 92px'
            }}>Tuesday - 09/05/2021</Typography>
            <Typography
            style={{
                margin: '16px 0px 0px 9px',
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  color: "#969696"
            }}>08:00</Typography>
            <Grid
            style={{
                
  background: "#FFFFFF",
  border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '416px',
  height: '80px',
  margin: '-26px 0px 0px 85px'

            }}>
                <Grid
                style={{
                    width: '140px',
                    height: '21px',

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
                    
  width: "284px",
  height: "28px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#BAB9B9",
  marginTop: 8
                }}>Vitamin C (x1), Fish Oil (x2), Panadol (x1), Ultibo...<br></br>
All drugs are dispensed on time</Typography>
                </Grid>
                
            </Grid>
            <Typography
            style={{
                margin: '30px 0px 0px 9px',
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  color: "#969696"
            }}>13:00</Typography>
            <Grid
            style={{
                
   background: "#FFFFFF",
//   border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '416px',
  height: '80px',
  margin: '-30px 0px 0px 85px',
  
  padding: '3px 0px 0px 0px'

            }}>
                <Grid
                style={{
                    width: '156px',
                    height: '21px',

                    
  background: "#F8BF80",
  borderRadius: "20px",
  
  margin: '8px 0px 0px 20px',
  
                }}>
                <Typography
                style={{
                    
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#FFFFFF",
  
                }}>Prescription changes</Typography>
                <Typography
                style={{
                    
  width: "284px",
  height: "28px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#BAB9B9",
  marginTop: 8
                }}>Vitamin C (x1), Fish Oil (x2), Panadol (x1), Ultibo...<br></br>
All drugs are dispensed on time</Typography>
                </Grid>
                
            </Grid>
            <Typography
            style={{
                margin: '16px 0px 0px 9px',
                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  color: "#969696"
            }}>18:00</Typography>
            <Grid
            style={{
                
   background: "#FFFFFF",
//   border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '416px',
  height: '80px',

            }}>
                <Grid
                style={{
                    width: '70px',
                    height: '21px',

                    
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
                    
  width: "284px",
  height: "28px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#BAB9B9",
  marginTop: 8
                }}>Vitamin C (x1), Fish Oil (x2), Panadol (x1), Ultibo...<br></br>
All drugs are dispensed on time</Typography>
                </Grid>
                
            </Grid>

            </Grid>
          </Grid>
       
      </Grid>
      <Grid
      style={{
        margin: '-670px 0px 0px 800px'
      }}
      >
      <Calendar value={selectedDay} onChange={setSelectedDay} colorPrimary="#216194" />
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
