import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CakeWithSoundDetection = () => {
  const [showPermissionDialog, setShowPermissionDialog] = useState(true);
  // Removed unused permissionGranted state
  const [isBlowing, setIsBlowing] = useState(false);
  const flameRef = useRef(null);
  const hasRedirectedRef = useRef(false);
  const rafIdRef = useRef(null);
  const meterRef = useRef(null);
  const audioContextRef = useRef(null);
  const navigate = useNavigate();

  // Audio processing constants
  const CLIP_LEVEL = 0.60;
  const AVERAGING = 0.99;
  const CLIP_LAG = 3500;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (meterRef.current) {
        meterRef.current.disconnect();
        if (meterRef.current.onaudioprocess) {
          meterRef.current.onaudioprocess = null;
        }
      }
      if (audioContextRef.current?.state !== 'closed') {
        audioContextRef.current?.close();
      }
    };
  }, []);



  // ... (rest of your audio processing functions remain the same)

  // Example: Simulate blowing detection (replace with your actual audio detection logic)
  useEffect(() => {
    // This is a placeholder for your blowing detection logic.
    // Replace this with your actual microphone/audio detection code.
    // For demonstration, we'll simulate blowing after 5 seconds.
    if (!showPermissionDialog) {
      const timer = setTimeout(() => {
        setIsBlowing(true);
        // Optionally, redirect after blowing
        if (!hasRedirectedRef.current) {
          hasRedirectedRef.current = true;
          setTimeout(() => {
            setIsBlowing(false);
            navigate('/birthday-message');
          }, 1000);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPermissionDialog, navigate]);

  const [displayText, setDisplayText] = useState('');
  const fullText = 'Blow out the candle';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className='bro'>
      <AnimatePresence>
        {showPermissionDialog && (
          <motion.div 
            className="permission-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              color: 'white',
              textAlign: 'center',
              padding: '20px'
            }}
          >
            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Microphone Access Required
            </motion.h2>
            
            <motion.p 
              style={{ fontSize: '1.2rem', margin: '20px 0' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              To blow out the candle, we need access to your microphone.
              <br />
              This will only be used to detect when you blow on the candle. Don't forget to unmute the audio
            </motion.p>
            
            <motion.div 
              style={{ display: 'flex', gap: '20px', marginTop: '20px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button 
                onClick={() => {
                  setShowPermissionDialog(false);
                  startListening();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '10px 20px',
                  fontSize: '1rem',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Allow Microphone
              </motion.button>
              
              <motion.button 
                onClick={() => {
                  setShowPermissionDialog(false);
                  alert('You need to allow microphone access to continue.');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '10px 20px',
                  fontSize: '1rem',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Deny
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h1 
        className='text'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
      </motion.h1>
      
      <motion.div 
        className="cake"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          <motion.div 
            className="flame" 
            ref={flameRef}
            animate={{
              scale: isBlowing ? [1, 1.2, 0] : [0.8, 1, 0.9],
              opacity: isBlowing ? [1, 0.5, 0] : [0.8, 1, 0.9],
            }}
            transition={{
              duration: isBlowing ? 1 : 2,
              repeat: isBlowing ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Removed permissionGranted check since it's unused */}
    </div>
  );
};

export default CakeWithSoundDetection;