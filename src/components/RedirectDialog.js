import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography,
  Box
} from '@mui/material';

const RedirectDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show dialog on component mount
    setOpen(true);
  }, []);

  const handleOldSite = () => {
    // Allow them to continue to the old site
    setOpen(false);
  };

  const handleNewSite = () => {
    // Redirect to new site
    window.location.href = 'https://declankramper.com';
  };

  return (
    <Dialog 
      open={open} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 2
        }
      }}
    >
      <DialogTitle sx={{ 
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'text.primary'
      }}>
        Site Deprecation Notice
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This site (declankramper.me) has been deprecated.
          </Typography>
          <Typography variant="body1">
            Please visit the new site at <strong>declankramper.com</strong>
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ 
        justifyContent: 'center',
        gap: 2,
        pb: 2
      }}>
        <Button 
          onClick={handleOldSite}
          variant="outlined"
          sx={{
            color: 'text.secondary',
            borderColor: 'text.secondary',
            '&:hover': {
              borderColor: 'text.primary',
              color: 'text.primary'
            }
          }}
        >
          Continue to Old Site
        </Button>
        <Button 
          onClick={handleNewSite}
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          Go to New Site
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RedirectDialog;