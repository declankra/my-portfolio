import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';


const colorPalette = {
  0: '#0D3DC3', // persian blue
  1: '#A9E5BB', // celadon light green
  2: '#937666', // beaver brown
  3: '#CAA8F5', // mauve light purple
  4: '#5CC8FF', // Reserved for future use - deep sky blue
};

const data = [
  { id: 0, value: 4, label: 'Magic Record Player | IOT Controller', color: colorPalette[1] },
  { id: 1, value: 0, label: 'Soundcloud Downloader | OS Code', color: colorPalette[3] },
  { id: 2, value: 169, label: 'Meet or Not | AI Web App', color: colorPalette[2] },
  { id: 3, value: 792, label: 'Race Time Calculator | IOS App', color: colorPalette[0] },
  { id: 4, value: 16, label: 'Grade Calculator | Web App', color: colorPalette[4] },
];

const totalCount = data.reduce((sum, item) => sum + item.value, 0);

const UserCount = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const chartSize = isMobile ? 325 : 400;
  const centerX = chartSize / 2;
  const centerY = chartSize / 2;

  const handleArcClick = (event, itemIndex) => {
    if (isMobile) {
      setHighlightedIndex(prevIndex => prevIndex === itemIndex ? null : itemIndex);
      setShowTooltip(false);
    }
  };

  const handleInfoClick = (event) => {
    if (isMobile) {
      event.stopPropagation();
      setShowTooltip(prevState => !prevState);
      setHighlightedIndex(null);
    }
  };

  const tooltipContent = `This chart shows the number of unique, first-time users across all my products.
  A user is anyone who has downloaded, installed, or visited and interacted with the product.
  The direction of impact, positive or negative, is not decipherable at scale, yet.
  Data updates bi-weekly.`;

  return (
    <Box sx={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
    }}>
      <Box sx={{ 
        position: 'relative',
        width: chartSize,
        height: chartSize
      }}>
        <PieChart
          series={[
            {
              data,
              highlightScope: { fade: 'global', highlighted: 'item' },
              innerRadius: chartSize * 0.25,
              paddingAngle: 2,
              cornerRadius: 10,
              arcLabel: (item) => `${item.label}: ${item.value}`,
              arcLabelMinAngle: isMobile ? 360 : 360,
              cx: centerX,
              cy: centerY,
              highlighted: highlightedIndex,
              color: (_, index) => data[index].color,

            },
          ]}
          height={chartSize}
          width={chartSize}
          slotProps={{
            legend: { hidden: true },
          }}
          onClick={handleArcClick}
        >
          <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: theme.typography.titleProjectCard.fontSize,
              fill: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {`Total: ${totalCount}`}
          </text>
        </PieChart>
        
        {isMobile ? (
          <IconButton 
            onClick={handleInfoClick}
            sx={{ 
              position: 'absolute', 
              bottom: 20, 
              right: 20,
              color: theme.palette.text.secondary
            }}
          >
            <InfoIcon fontSize="small" />
          </IconButton>
        ) : (
          <Tooltip title={tooltipContent} placement="bottom-end" arrow>
            <IconButton 
              sx={{ 
                position: 'absolute', 
                bottom: 20, 
                right: 20,
                color: theme.palette.text.secondary
              }}
            >
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      {isMobile && (
        <Box sx={{ mt: 0, textAlign: 'center' }}>
          {showTooltip && (
            <Typography variant="body2" sx={{ mt: 0, px: 2 }}>
              {tooltipContent}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserCount;