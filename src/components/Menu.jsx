import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';

const TopMenu = ({hoveredTabIndex, handleTabHover, handleTabLeave}) => {


  return (
    <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
      <Box
        sx={{
          p: '10px 100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: hoveredTabIndex === 0
              ? 105
              : hoveredTabIndex === 1
              ? 80
              : hoveredTabIndex === 2
              ? 70
              : hoveredTabIndex === 3
              ? 90
              : hoveredTabIndex === 4
              ? 60
              : 'auto',
            borderBottom: hoveredTabIndex === null ? 'none' : '2px solid',
            borderBottomColor: hoveredTabIndex === null ? 'none' : '#FD5B26',
            bottom: -3,
            left: hoveredTabIndex === 0
              ? 95
              : hoveredTabIndex === 1
              ? 227
              : hoveredTabIndex === 2
              ? 330
              : hoveredTabIndex === 3
              ? 428
              : hoveredTabIndex === 4
              ? 547
              : 0,
          }}
        ></Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              textTransform: 'capitalize',
              mr: 6,
              color: hoveredTabIndex === 0 ? '#FD5B26' : '#202225',
              fontSize: 16,
              fontWeight: 400,
            }}
            onMouseEnter={() => handleTabHover(0)}
          >
            Our Portfolio
          </Typography>
          <Typography
            sx={{
              textTransform: 'capitalize',
              mr: 6,
              color: hoveredTabIndex === 1 ? '#FD5B26' : '#202225',
              fontSize: 16,
              fontWeight: 400,
            }}
            onMouseEnter={() => handleTabHover(1)}
          >
            Insights
          </Typography>
          <Typography
            sx={{
              textTransform: 'capitalize',
              mr: 6,
              color: hoveredTabIndex === 2 ? '#FD5B26' : '#202225',
              fontSize: 16,
              fontWeight: 400,
            }}
            label="GOLP"
            onMouseEnter={() => handleTabHover(2)}
          >
            GOLP
          </Typography>
          <Typography
            sx={{
              textTransform: 'capitalize',
              mr: 6,
              color: hoveredTabIndex === 3 ? '#FD5B26' : '#202225',
              fontSize: 16,
              fontWeight: 400,
            }}
            onMouseEnter={() => handleTabHover(3)}
          >
            Education
          </Typography>
          <Typography
            sx={{
              textTransform: 'capitalize',
              color: hoveredTabIndex === 4 ? '#FD5B26' : '#202225',
              fontSize: 16,
              fontWeight: 400,
            }}
            onMouseEnter={() => handleTabHover(4)}
          >
            Tools
          </Typography>
        </Box>

        <Box
          onMouseLeave={handleTabLeave}
          sx={{
            backgroundColor: '#FDEAE4',
            borderTop: 1,
            borderColor: 'divider',
            width: '100%',
            position: 'absolute',
            zIndex: 20000,
            top: 48,
            left: 0,
          }}
        >
          {hoveredTabIndex === 0 && (
            <Box
              sx={{
                p: hoveredTabIndex === null ? 0 : '20px 120px',
                display: 'flex',
                minHeight: 400,
                pt: 5,
                alignItems: 'flex-start',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', mr: 12 }}>
                <Link
                  to="/"
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#202225',
                    marginBottom: 45,
                  }}
                >
                  Our Portfolio
                </Link>
                <Link
                  to="/"
                  style={{ fontSize: 14, color: '#202225', marginBottom: 25 }}
                >
                  View All Portfolio
                </Link>
                {/* 나머지 Link들도 같은 형식으로 작성 */}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link
                  to="/machine"
                  style={{ fontSize: 14, color: '#202225' }}
                >
                  Theme Machine
                </Link>
              </Box>
            </Box>
          )}
          {/* 나머지 탭들도 같은 형식으로 작성 */}
        </Box>
        {/* Button - Join Us, Sign In */}
        <Box>
          <Button
            sx={{
              textTransform: 'capitalize',
              border: 'none',
              fontSize: 13,
              p: 0,
              backgroundColor: '#FDEAE4',
              ':hover': {
                backgroundColor: 'transparent',
              },
              color: '#360c5e',
            }}
          >
            Join us
          </Button>
          <Button
            sx={{
              textTransform: 'capitalize',
              color: '#fdeae4',
              fontSize: 13,
              p: 0,
              backgroundColor: '#360c5e',
              ':hover': {
                backgroundColor: '#360c5e',
              },
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TopMenu;
