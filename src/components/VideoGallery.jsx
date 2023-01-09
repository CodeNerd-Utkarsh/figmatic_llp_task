import { Avatar, Button, Card, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import "./VideoGallery.css"
function VideoGallery() {
    return (
        <div className='videoGallery' >
            <header className="videoGallery__header">

                <Typography variant='h4' style={{ marginLeft: "5%" }} >Knowledge</Typography>
                <div className='videoGallery__headerRight'>
                    <Button variant="contained" >CREATE COURSE</Button>
                    <Avatar >
                        US
                    </Avatar>
                    <MoreVertIcon style={{ cursor: "pointer" }} />
                </div>
            </header>
            <div className="videoGallery__container container">
                <div className="category">
                    <div className='types'>
                        <Typography style={{ textDecoration: "underline" }} >All</Typography>
                        <Typography>LIVE</Typography>
                        <Typography>ARCHIVED</Typography>
                        <Typography>DRAFT</Typography>
                    </div>
                    <FormControl style={{ width: "80px" }}>
                        <InputLabel>Team</InputLabel>
                        <Select
                            label="Team"
                            value="Team"
                        >
                            <MenuItem>Team 01</MenuItem>
                            <MenuItem>Team 02</MenuItem>
                            <MenuItem>Team 03</MenuItem>
                            <MenuItem>Team 04</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <div className="videoGallery__cards">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://i.ytimg.com/an_webp/yEKtJGha3yM/mqdefault_6s.webp?du=3000&sqp=CKzL750G&rs=AOn4CLCUo52dx49B9VISdCxYnh_aZ-lEgQ"

                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Video 01
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload Date:- dd/mm/yyyy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Video:- XX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Duration:- XX minutes
                            </Typography>
                            <div className='tags'>Tag01</div>
                            <div className='tags'>Tag02</div>

                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://i.ytimg.com/vi/zah7aH0BWyk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwqtKYi9nlV3WV0Ir6Uhyg7EsHjA"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Video 02
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload Date:- dd/mm/yyyy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Video:- XX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Duration:- XX minutes
                            </Typography>
                            <div className='tags'>Tag01</div>

                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://i.ytimg.com/vi/zJSY8tbf_ys/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBp8odytXUljnKPGYwkGhjFf6Atew"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Video 03
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload Date:- dd/mm/yyyy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Video:- XX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Duration:- XX minutes
                            </Typography>
                            <div className='tags'>Tag01</div>
                            <div className='tags'>Tag02</div>

                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://i.ytimg.com/vi/X7IBa7vZjmo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_tQgHuviqIcpruH1EpkBfzRxeRQ"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Video 04
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload Date:- dd/mm/yyyy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Video:- XX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Duration:- XX minutes
                            </Typography>
                            <div className='tags'>Tag01</div>

                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://i.ytimg.com/vi/LTNJHQb9a6U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCibOkJwlF9AqMIWkxUQkC-ZQQFpQ"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload Date:- dd/mm/yyyy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Video:- XX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Duration:- XX minutes
                            </Typography>
                            <div className='tags'>Tag01</div>
                            <div className='tags'>Tag02</div>
                            <div className='tags'>Tag03</div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default VideoGallery