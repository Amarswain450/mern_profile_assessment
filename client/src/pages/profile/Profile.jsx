import React, { useEffect } from 'react';
import "./Profile.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { routerConfigurations } from '../../routes';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  const { loading, profiles } = useSelector((state) => state.getProfile);

  const nameCapitalize = (str) => {
    const truncatedStr = str.slice(0, 20);
    const displayStr = truncatedStr.length < str.length ? truncatedStr + "..." : truncatedStr;
    const newTitle = displayStr.split(" ");
    const updatedTitle = newTitle.map(word =>
      word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()
    );
    return updatedTitle.join(" ");
  };

  const editProfileHandler = (id) => {
    navigate(`${routerConfigurations.edit}/${id}`)
  }

  return (
    <>
      <Box className='profile_main_div'>
        {
          loading ? (
            <Box sx={{ width: "100%", height: "100vh", display: 'flex', alignItems: "center", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            profiles?.map((data) => {
              return (
                <div className='profile_wrapper_div' key={data?._id}>
                  <Card className='profileCardDiv' variant="outlined">
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box>
                          <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.secondary" gutterBottom>
                            {nameCapitalize(data?.username)}
                          </Typography>
                        </Box>
                        <Box sx={{ cursor: "pointer" }} onClick={() => editProfileHandler(data?._id)}>
                          <EditIcon />
                        </Box>
                      </Box>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {data?.sectors}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              )
            })
          )
        }
      </Box>
    </>
  )
}

export default Profile