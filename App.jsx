import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main style={{ background: 'black', color: 'white', fontFamily: 'monospace', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <motion.img
        src="https://i.ibb.co/q90XZnB/dark-cheems.png"
        alt="Dark Cheems"
        style={{ width: '200px', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 20px white' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Dark Cheems ($TOTAKEKE)</h1>
      <p>Renounced. No tax. Powered by memes.</p>
      <p>
        <a href="https://pancakeswap.finance/swap?outputCurrency=0xd743d3C50EBd82f9173B599383979D10f3494444" target="_blank" style={{ color: 'yellow', fontWeight: 'bold' }}>Buy on PancakeSwap</a>
      </p>
      <p>
        <a href="https://dexscreener.com/bsc/0xd743d3c50ebd82f9173b599383979d10f3494444" target="_blank" style={{ color: 'yellow', fontWeight: 'bold' }}>View Chart</a>
      </p>
    </main>
  );
}
