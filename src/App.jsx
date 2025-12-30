// // import React, { useState, useEffect, useRef } from 'react';
// // import { Camera, Cpu, Code, Mail, Github, Linkedin, Terminal, Activity } from 'lucide-react';

// // const MissionControlPortfolio = () => {
// //   const [currentStatus, setCurrentStatus] = useState('RESEARCHING');
// //   const [activePanel, setActivePanel] = useState('overview');
// //   const canvasRef = useRef(null);

// //   // Enhanced dynamic background
// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
    
// //     const ctx = canvas.getContext('2d');
// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     const particles = [];
// //     for (let i = 0; i < 150; i++) {
// //       particles.push({
// //         x: Math.random() * canvas.width,
// //         y: Math.random() * canvas.height,
// //         vx: (Math.random() - 0.5) * 0.8,
// //         vy: (Math.random() - 0.5) * 0.8,
// //         size: Math.random() * 2.5,
// //         opacity: Math.random() * 0.5 + 0.3
// //       });
// //     }

// //     const waves = [];
// //     for (let i = 0; i < 3; i++) {
// //       waves.push({
// //         y: Math.random() * canvas.height,
// //         amplitude: 20 + Math.random() * 30,
// //         frequency: 0.01 + Math.random() * 0.02,
// //         phase: Math.random() * Math.PI * 2,
// //         speed: 0.02 + Math.random() * 0.03,
// //         opacity: 0.1 + Math.random() * 0.2
// //       });
// //     }

// //     const dataStreams = [];
// //     for (let i = 0; i < 20; i++) {
// //       dataStreams.push({
// //         x: Math.random() * canvas.width,
// //         y: -Math.random() * canvas.height,
// //         speed: 1 + Math.random() * 2,
// //         chars: Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')
// //       });
// //     }

// //     let scanlineY = 0;
// //     let scanlineDirection = 1;
// //     let frame = 0;

// //     const animate = () => {
// //       ctx.fillStyle = 'rgba(5, 8, 18, 0.15)';
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);

// //       waves.forEach(wave => {
// //         wave.phase += wave.speed;
// //         ctx.beginPath();
// //         ctx.strokeStyle = `rgba(0, 217, 255, ${wave.opacity})`;
// //         ctx.lineWidth = 1.5;
// //         for (let x = 0; x < canvas.width; x += 5) {
// //           const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
// //           if (x === 0) ctx.moveTo(x, y);
// //           else ctx.lineTo(x, y);
// //         }
// //         ctx.stroke();
// //       });

// //       dataStreams.forEach(stream => {
// //         stream.y += stream.speed;
// //         if (stream.y > canvas.height) {
// //           stream.y = -100;
// //           stream.x = Math.random() * canvas.width;
// //         }
// //         ctx.font = '12px monospace';
// //         stream.chars.forEach((char, i) => {
// //           const opacity = 1 - (i / stream.chars.length);
// //           ctx.fillStyle = `rgba(0, 255, 136, ${opacity * 0.3})`;
// //           ctx.fillText(char, stream.x, stream.y + i * 15);
// //         });
// //       });

// //       particles.forEach((p, i) => {
// //         p.x += p.vx;
// //         p.y += p.vy;
// //         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
// //         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

// //         particles.slice(i + 1).forEach(p2 => {
// //           const dx = p2.x - p.x;
// //           const dy = p2.y - p.y;
// //           const distance = Math.sqrt(dx * dx + dy * dy);
// //           if (distance < 100) {
// //             ctx.strokeStyle = `rgba(0, 217, 255, ${(1 - distance / 100) * 0.2})`;
// //             ctx.lineWidth = 0.5;
// //             ctx.beginPath();
// //             ctx.moveTo(p.x, p.y);
// //             ctx.lineTo(p2.x, p2.y);
// //             ctx.stroke();
// //           }
// //         });

// //         ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
// //         ctx.fill();
// //         ctx.shadowBlur = 10;
// //         ctx.shadowColor = 'rgba(0, 217, 255, 0.5)';
// //         ctx.fill();
// //         ctx.shadowBlur = 0;
// //       });

// //       scanlineY += scanlineDirection * 3;
// //       if (scanlineY > canvas.height || scanlineY < 0) scanlineDirection *= -1;
// //       ctx.strokeStyle = 'rgba(0, 217, 255, 0.15)';
// //       ctx.lineWidth = 2;
// //       ctx.beginPath();
// //       ctx.moveTo(0, scanlineY);
// //       ctx.lineTo(canvas.width, scanlineY);
// //       ctx.stroke();

// //       if (frame % 60 === 0) {
// //         const pulseX = Math.random() * canvas.width;
// //         const pulseY = Math.random() * canvas.height;
// //         for (let r = 0; r < 5; r++) {
// //           setTimeout(() => {
// //             ctx.strokeStyle = `rgba(255, 51, 102, ${0.5 - r * 0.1})`;
// //             ctx.lineWidth = 2;
// //             ctx.beginPath();
// //             ctx.arc(pulseX, pulseY, r * 30, 0, Math.PI * 2);
// //             ctx.stroke();
// //           }, r * 100);
// //         }
// //       }

// //       frame++;
// //       requestAnimationFrame(animate);
// //     };

// //     animate();

// //     const handleResize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const statuses = ['RESEARCHING', 'CODING', 'LEARNING', 'INNOVATING'];
// //     let index = 0;
// //     const interval = setInterval(() => {
// //       index = (index + 1) % statuses.length;
// //       setCurrentStatus(statuses[index]);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div style={{ 
// //       minHeight: '100vh', 
// //       background: '#050812', 
// //       color: '#e0f7ff', 
// //       fontFamily: 'monospace',
// //       position: 'relative',
// //       overflow: 'auto'
// //     }}>
// //       {/* Background Canvas */}
// //       <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />

// //       {/* Grid Overlay */}
// //       <div style={{
// //         position: 'fixed',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         bottom: 0,
// //         backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
// //         backgroundSize: '50px 50px',
// //         opacity: 0.2,
// //         zIndex: 1,
// //         pointerEvents: 'none'
// //       }} />

// //       {/* Main Content */}
// //       <div style={{ position: 'relative', zIndex: 10, padding: '20px', width: '100%', boxSizing: 'border-box' }}>
        
// //         {/* Header */}
// //         <div style={{
// //           border: '3px solid #00d9ff',
// //           background: 'rgba(10, 14, 39, 0.95)',
// //           padding: '20px',
// //           borderRadius: '10px',
// //           marginBottom: '20px',
// //           boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
// //           display: 'flex',
// //           justifyContent: 'space-between',
// //           alignItems: 'center',
// //           flexWrap: 'wrap',
// //           gap: '20px'
// //         }}>
// //           <div>
// //             <h1 style={{ 
// //               fontSize: '32px', 
// //               fontWeight: 'bold', 
// //               color: '#00ffff', 
// //               margin: '0 0 10px 0',
// //               fontFamily: "'Orbitron', monospace",
// //               letterSpacing: '3px'
// //             }}>
// //               MISSION CONTROL: SHASHANK
// //             </h1>
// //             <div style={{ fontSize: '14px', color: '#7dd3fc' }}>
// //               AI RESEARCH SPECIALIST // SYSTEMS OPERATIONAL
// //             </div>
// //           </div>
// //           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
// //             <div style={{ textAlign: 'right' }}>
// //               <div style={{ fontSize: '12px', color: '#7dd3fc' }}>CURRENT STATUS</div>
// //               <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff3366' }}>{currentStatus}</div>
// //             </div>
// //             <Activity size={32} color="#00ffff" style={{ animation: 'pulse 2s infinite' }} />
// //           </div>
// //         </div>

// //         {/* Main Layout - Using Flexbox instead of Grid */}
// //         <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
// //           {/* Left Sidebar */}
// //           <div style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
// //             {/* Stats Panel */}
// //             <div style={{
// //               border: '3px solid #00d9ff',
// //               background: 'rgba(10, 14, 39, 0.95)',
// //               padding: '20px',
// //               borderRadius: '10px',
// //               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
// //                 <Terminal size={20} color="#00ffff" />
// //                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>MISSION PARAMETERS</h2>
// //               </div>
// //               <StatBar label="ACADEMIC PERFORMANCE" value={100} color="#00ff88" />
// //               <StatBar label="RESEARCH PROGRESS" value={90} color="#00d9ff" />
// //               <StatBar label="PROJECT COMPLETION" value={95} color="#0066ff" />
// //               <StatBar label="INDUSTRY EXPERIENCE" value={88} color="#ff3366" />
// //             </div>

// //             {/* Status Panel */}
// //             <div style={{
// //               border: '3px solid #00d9ff',
// //               background: 'rgba(10, 14, 39, 0.95)',
// //               padding: '20px',
// //               borderRadius: '10px',
// //               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
// //                 <Activity size={20} color="#00ffff" />
// //                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>SYSTEM STATUS</h2>
// //               </div>
// //               <StatusLine label="LOCATION" value="Dearborn, MI" status="active" />
// //               <StatusLine label="GPA" value="4.0 / 4.0" status="active" />
// //               <StatusLine label="GRADUATION" value="April 2026" status="scheduled" />
// //               <StatusLine label="PUBLICATIONS" value="3 PAPERS" status="active" />
// //               <StatusLine label="EXPERIENCE" value="3+ YEARS" status="active" />
// //             </div>

// //             {/* Contact Panel */}
// //             <div style={{
// //               border: '3px solid #00d9ff',
// //               background: 'rgba(10, 14, 39, 0.95)',
// //               padding: '20px',
// //               borderRadius: '10px',
// //               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
// //                 <Mail size={20} color="#00ffff" />
// //                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>COMMUNICATION LINKS</h2>
// //               </div>
// //               <ContactButton icon={<Mail size={16} />} label="EMAIL" href="mailto:shashanc@umich.edu" />
// //               <ContactButton icon={<Github size={16} />} label="GITHUB" href="https://github.com/chauhan-sh" />
// //               <ContactButton icon={<Linkedin size={16} />} label="LINKEDIN" href="https://www.linkedin.com/in/chauhan-sh/" />
// //             </div>
// //           </div>

// //           {/* Center Content */}
// //           <div style={{ flex: '2 1 500px', minWidth: '300px' }}>
// //             {/* Tabs */}
// //             <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
// //               {['overview', 'research', 'projects', 'skills'].map(tab => (
// //                 <button
// //                   key={tab}
// //                   onClick={() => setActivePanel(tab)}
// //                   style={{
// //                     padding: '12px 20px',
// //                     fontSize: '12px',
// //                     fontWeight: 'bold',
// //                     borderRadius: '8px 8px 0 0',
// //                     border: activePanel === tab ? '3px solid #00ffff' : '3px solid rgba(0, 217, 255, 0.5)',
// //                     borderBottom: 'none',
// //                     background: activePanel === tab ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.6)',
// //                     color: activePanel === tab ? '#00ffff' : '#7dd3fc',
// //                     cursor: 'pointer',
// //                     transition: 'all 0.3s',
// //                     boxShadow: activePanel === tab ? '0 -5px 20px rgba(0, 217, 255, 0.5)' : 'none'
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.target.style.color = '#00ffff';
// //                     e.target.style.borderColor = '#00ffff';
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     if (activePanel !== tab) {
// //                       e.target.style.color = '#7dd3fc';
// //                       e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
// //                     }
// //                   }}
// //                 >
// //                   {tab.toUpperCase()}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Content Area */}
// //             <div style={{
// //               border: '3px solid #00d9ff',
// //               background: 'rgba(10, 14, 39, 0.95)',
// //               padding: '30px',
// //               borderRadius: '10px',
// //               boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
// //               minHeight: '500px'
// //             }}>
// //               {activePanel === 'overview' && <OverviewPanel />}
// //               {activePanel === 'research' && <ResearchPanel />}
// //               {activePanel === 'projects' && <ProjectsPanel />}
// //               {activePanel === 'skills' && <SkillsPanel />}
// //             </div>
// //           </div>

// //           {/* Right Sidebar */}
// //           <div style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
// //             {/* Radar */}
// //             <div style={{
// //               border: '3px solid #00d9ff',
// //               background: 'rgba(10, 14, 39, 0.95)',
// //               padding: '20px',
// //               borderRadius: '10px',
// //               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
// //                 <Camera size={20} color="#00ffff" />
// //                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>TECH RADAR</h2>
// //               </div>
// //               <RadarDisplay />
// //             </div>

// //             {/* Timeline */}
// //             <div style={{
// //               border: '3px solid #00d9ff',
// //               background: 'rgba(10, 14, 39, 0.95)',
// //               padding: '20px',
// //               borderRadius: '10px',
// //               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
// //                 <Cpu size={20} color="#00ffff" />
// //                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>MISSION TIMELINE</h2>
// //               </div>
// //               <Timeline />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div style={{ 
// //           textAlign: 'center', 
// //           fontSize: '12px', 
// //           color: '#7dd3fc', 
// //           borderTop: '2px solid rgba(0, 217, 255, 0.3)', 
// //           paddingTop: '20px',
// //           marginTop: '40px'
// //         }}>
// //           MISSION CONTROL v2.0 // ALL SYSTEMS OPERATIONAL // © 2024 SHASHANK
// //         </div>
// //       </div>

// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
// //         @keyframes pulse {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0.5; }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // // Components with inline styles
// // const StatBar = ({ label, value, color }) => (
// //   <div style={{ marginBottom: '15px' }}>
// //     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
// //       <span style={{ color: '#7dd3fc' }}>{label}</span>
// //       <span style={{ color: '#00ffff', fontWeight: 'bold' }}>{value}%</span>
// //     </div>
// //     <div style={{ height: '8px', background: '#0a0e27', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(0, 217, 255, 0.4)' }}>
// //       <div style={{ 
// //         width: `${value}%`, 
// //         height: '100%',
// //         background: `linear-gradient(90deg, ${color}, ${color}dd)`,
// //         boxShadow: `0 0 10px ${color}`,
// //         transition: 'width 1s ease-out'
// //       }} />
// //     </div>
// //   </div>
// // );

// // const StatusLine = ({ label, value, status }) => (
// //   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '14px' }}>
// //     <span style={{ color: '#7dd3fc' }}>{label}:</span>
// //     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// //       <span style={{ color: '#e0f7ff', fontWeight: 'bold' }}>{value}</span>
// //       <div style={{ 
// //         width: '8px', 
// //         height: '8px', 
// //         borderRadius: '50%',
// //         background: status === 'active' ? '#00ff88' : '#ff9900',
// //         boxShadow: `0 0 10px ${status === 'active' ? '#00ff88' : '#ff9900'}`,
// //         animation: status === 'active' ? 'pulse 2s infinite' : 'none'
// //       }} />
// //     </div>
// //   </div>
// // );

// // const ContactButton = ({ icon, label, href }) => (
// //   <a 
// //     href={href}
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     style={{
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '12px',
// //       padding: '12px 15px',
// //       background: '#0a0e27',
// //       border: '2px solid rgba(0, 217, 255, 0.5)',
// //       borderRadius: '8px',
// //       color: '#7dd3fc',
// //       textDecoration: 'none',
// //       fontSize: '12px',
// //       fontWeight: 'bold',
// //       marginBottom: '10px',
// //       transition: 'all 0.3s',
// //       cursor: 'pointer'
// //     }}
// //     onMouseEnter={(e) => {
// //       e.currentTarget.style.borderColor = '#00ffff';
// //       e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.6)';
// //       e.currentTarget.style.color = '#00ffff';
// //       e.currentTarget.style.transform = 'scale(1.02)';
// //     }}
// //     onMouseLeave={(e) => {
// //       e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
// //       e.currentTarget.style.boxShadow = 'none';
// //       e.currentTarget.style.color = '#7dd3fc';
// //       e.currentTarget.style.transform = 'scale(1)';
// //     }}
// //   >
// //     <div style={{ color: '#00ffff' }}>{icon}</div>
// //     <span>{label}</span>
// //   </a>
// // );

// // const OverviewPanel = () => (
// //   <div>
// //     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
// //       MISSION OBJECTIVE
// //     </h3>
// //     <p style={{ color: '#c9e9f6', lineHeight: '1.8', marginBottom: '30px' }}>
// //       Research Assistant at Data Science and Management Research Lab (DSMRL), University of Michigan-Dearborn. 
// //       Pursuing Master's in Artificial Intelligence (GPA: 4.0/4.0). Specializing in Machine Learning, 
// //       Large Language Models, and AI-driven systems. Former Software Development Engineer at CData Software with 
// //       3+ years of experience building scalable cloud platforms.
// //     </p>
    
// //     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
// //       <MetricCard label="GPA" value="4.0" sublabel="PERFECT SCORE" />
// //       <MetricCard label="EXPERIENCE" value="3+" sublabel="YEARS" />
// //       <MetricCard label="PROJECTS" value="15+" sublabel="COMPLETED" />
// //       <MetricCard label="PUBLICATIONS" value="3" sublabel="RESEARCH PAPERS" />
// //     </div>
    
// //     <div style={{ borderTop: '2px solid rgba(0, 217, 255, 0.3)', paddingTop: '20px' }}>
// //       <div style={{ fontSize: '12px', color: '#7dd3fc', marginBottom: '10px' }}>PRIMARY MISSION TARGET</div>
// //       <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff3366' }}>PhD ADMISSION 2026</div>
// //       <div style={{ fontSize: '12px', color: '#7dd3fc', marginTop: '10px' }}>RESEARCH FOCUS: AI/ML Systems</div>
// //     </div>
// //   </div>
// // );

// // const ResearchPanel = () => (
// //   <div>
// //     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
// //       RESEARCH OPERATIONS
// //     </h3>
    
// //     <ResearchCard 
// //       title="EXPLORE-EXPLOIT FRAMEWORK - DSMRL"
// //       description="Devised an EE framework adapting survey timing based on participant behavior and real-time air quality. Integrated Gaussian Process Regression with confidence interval-based decision-making. Technologies: Python, Scikit-learn, FastAPI, Twilio API."
// //       status="ACTIVE"
// //     />
    
// //     <ResearchCard 
// //       title="BLOCKCHAIN IOT FOR SMART CITIES"
// //       description="Authored chapter 'Blockchain IoT Concepts for Smart Cities' in CRC-Press Taylor & Francis book. Enhanced reliability and impact of urban infrastructure through IoT and Blockchain integration."
// //       status="PUBLISHED"
// //     />
    
// //     <ResearchCard 
// //       title="BLOCKCHAIN IN HEALTHCARE"
// //       description="Built pharmaceutical supply chain tracking system with remote patient monitoring. Achieved 3X higher efficiency. Presented at ICAAIC-22 and published in IJSER-21."
// //       status="PUBLISHED"
// //     />
// //   </div>
// // );

// // const ResearchCard = ({ title, description, status }) => (
// //   <div style={{
// //     border: '2px solid rgba(0, 217, 255, 0.5)',
// //     background: 'rgba(5, 8, 18, 0.8)',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     marginBottom: '15px',
// //     transition: 'all 0.3s',
// //     cursor: 'pointer'
// //   }}
// //   onMouseEnter={(e) => {
// //     e.currentTarget.style.borderColor = '#00ffff';
// //     e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
// //   }}
// //   onMouseLeave={(e) => {
// //     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
// //     e.currentTarget.style.boxShadow = 'none';
// //   }}>
// //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '10px' }}>
// //       <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0, flex: 1 }}>{title}</h4>
// //       <span style={{
// //         fontSize: '10px',
// //         padding: '4px 8px',
// //         borderRadius: '4px',
// //         fontWeight: 'bold',
// //         background: status === 'ACTIVE' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 153, 0, 0.3)',
// //         color: status === 'ACTIVE' ? '#00ff88' : '#ff9900',
// //         boxShadow: status === 'ACTIVE' ? '0 0 10px #00ff88' : '0 0 10px #ff9900',
// //         whiteSpace: 'nowrap'
// //       }}>
// //         {status}
// //       </span>
// //     </div>
// //     <p style={{ fontSize: '12px', color: '#c9e9f6', lineHeight: '1.6', margin: 0 }}>{description}</p>
// //   </div>
// // );

// // const ProjectsPanel = () => (
// //   <div>
// //     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
// //       DEPLOYED SYSTEMS
// //     </h3>
    
// //     <ProjectCard 
// //       title="ADAPTIVE CHATBOT WITH LLMs"
// //       tech="Python, OpenAI API, LangChain, ReactJS, Docker"
// //       description="Domain-specific chatbot platform with fine-tuned GPT-3 models. Integrated user-uploaded documents for personalized assistance."
// //     />
    
// //     <ProjectCard 
// //       title="AUTONOMOUS AI CLOUD OPTIMIZER"
// //       tech="Reinforcement Learning, GPT-3, AWS, Terraform"
// //       description="Multi-agent AI system using RL to dynamically optimize cloud costs across AWS, Azure, GCP."
// //     />
    
// //     <ProjectCard 
// //       title="PART OF SPEECH TAGGER"
// //       tech="PyTorch, spaCy, Transformers, NLTK"
// //       description="Deep Learning Bi-LSTM model for POS tagging across multiple languages. Achieved over 91% accuracy."
// //     />
    
// //     <ProjectCard 
// //       title="PYTHON CONNECTOR - CDATA"
// //       tech="Python, MySQL, PostgreSQL, Pytest"
// //       description="Developed Python connector adhering to PEP 249. Implemented all cursor methods for Connect Cloud interaction."
// //     />
    
// //     <ProjectCard 
// //       title="API CONNECTOR - CDATA PLATFORM"
// //       tech="C#, Java, Spring Boot, ReactJS, AWS"
// //       description="Architected API Connector streamlining external API integration, minimizing manual IT intervention by 35%."
// //     />
// //   </div>
// // );

// // const ProjectCard = ({ title, tech, description }) => (
// //   <div style={{
// //     border: '2px solid rgba(0, 217, 255, 0.5)',
// //     background: 'rgba(5, 8, 18, 0.8)',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     marginBottom: '15px',
// //     transition: 'all 0.3s',
// //     cursor: 'pointer'
// //   }}
// //   onMouseEnter={(e) => {
// //     e.currentTarget.style.borderColor = '#00ffff';
// //     e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
// //     e.currentTarget.querySelector('h4').style.color = '#00ff88';
// //   }}
// //   onMouseLeave={(e) => {
// //     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
// //     e.currentTarget.style.boxShadow = 'none';
// //     e.currentTarget.querySelector('h4').style.color = '#00ffff';
// //   }}>
// //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
// //       <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0, transition: 'color 0.3s' }}>{title}</h4>
// //       <Code size={16} color="#7dd3fc" />
// //     </div>
// //     <div style={{ fontSize: '11px', color: '#ff9900', fontWeight: 'bold', marginBottom: '8px' }}>{tech}</div>
// //     <p style={{ fontSize: '12px', color: '#c9e9f6', lineHeight: '1.6', margin: 0 }}>{description}</p>
// //   </div>
// // );

// // const SkillsPanel = () => (
// //   <div>
// //     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
// //       TECHNOLOGY STACK
// //     </h3>
    
// //     <SkillCategory 
// //       title="PROGRAMMING LANGUAGES"
// //       skills={['Python', 'C++', 'Java', 'C#', 'JavaScript', 'Kotlin', 'TypeScript', 'Swift', 'R', 'PHP']}
// //     />
    
// //     <SkillCategory 
// //       title="AI/ML FRAMEWORKS & LIBRARIES"
// //       skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'Hugging Face', 'spaCy', 'NLTK', 'XGBoost', 'LightGBM']}
// //     />
    
// //     <SkillCategory 
// //       title="WEB & CLOUD TECHNOLOGIES"
// //       skills={['ReactJS', 'NodeJS', 'Spring Boot', 'FastAPI', 'AWS', 'Docker', 'Terraform', 'Azure']}
// //     />
    
// //     <SkillCategory 
// //       title="DATABASES"
// //       skills={['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Neo4j', 'SQL Server']}
// //     />
    
// //     <SkillCategory 
// //       title="AI/ML TOOLS & PLATFORMS"
// //       skills={['GPT-3', 'OpenAI API', 'Stable-Baselines3', 'SageMaker', 'TensorBoard', 'BERT', 'LSTM', 'Prophet']}
// //     />
// //   </div>
// // );

// // const SkillCategory = ({ title, skills }) => (
// //   <div style={{ marginBottom: '25px' }}>
// //     <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#7dd3fc', marginBottom: '12px' }}>{title}</h4>
// //     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// //       {skills.map(skill => (
// //         <span 
// //           key={skill}
// //           style={{
// //             padding: '8px 12px',
// //             background: '#0a0e27',
// //             border: '2px solid rgba(0, 217, 255, 0.5)',
// //             borderRadius: '6px',
// //             fontSize: '12px',
// //             color: '#e0f7ff',
// //             fontWeight: 'bold',
// //             transition: 'all 0.3s',
// //             cursor: 'default'
// //           }}
// //           onMouseEnter={(e) => {
// //             e.target.style.borderColor = '#00ffff';
// //             e.target.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.6)';
// //             e.target.style.color = '#00ffff';
// //           }}
// //           onMouseLeave={(e) => {
// //             e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
// //             e.target.style.boxShadow = 'none';
// //             e.target.style.color = '#e0f7ff';
// //           }}
// //         >
// //           {skill}
// //         </span>
// //       ))}
// //     </div>
// //   </div>
// // );

// // const MetricCard = ({ label, value, sublabel }) => (
// //   <div style={{
// //     background: '#050812',
// //     border: '2px solid rgba(0, 217, 255, 0.5)',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     textAlign: 'center',
// //     transition: 'all 0.3s',
// //     cursor: 'default'
// //   }}
// //   onMouseEnter={(e) => {
// //     e.currentTarget.style.borderColor = '#00ffff';
// //     e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.5)';
// //   }}
// //   onMouseLeave={(e) => {
// //     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
// //     e.currentTarget.style.boxShadow = 'none';
// //   }}>
// //     <div style={{ fontSize: '12px', color: '#7dd3fc', marginBottom: '5px' }}>{label}</div>
// //     <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00ffff', marginBottom: '5px' }}>{value}</div>
// //     <div style={{ fontSize: '12px', color: '#00ff88' }}>{sublabel}</div>
// //   </div>
// // );

// // const RadarDisplay = () => (
// //   <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
// //     <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
// //       {[0, 1, 2, 3, 4].map(i => (
// //         <circle
// //           key={i}
// //           cx="100"
// //           cy="100"
// //           r={20 + i * 20}
// //           fill="none"
// //           stroke="rgba(0, 217, 255, 0.4)"
// //           strokeWidth="1.5"
// //         />
// //       ))}
// //       <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
// //       <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
// //       <line x1="30" y1="30" x2="170" y2="170" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
// //       <line x1="170" y1="30" x2="30" y2="170" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
      
// //       <circle cx="140" cy="70" r="5" fill="#00ff88" />
// //       <circle cx="75" cy="55" r="5" fill="#00d9ff" />
// //       <circle cx="120" cy="130" r="5" fill="#ff3366" />
// //       <circle cx="60" cy="120" r="5" fill="#ff9900" />
      
// //       <line 
// //         x1="100" 
// //         y1="100" 
// //         x2="100" 
// //         y2="20" 
// //         stroke="rgba(0, 255, 255, 0.8)" 
// //         strokeWidth="3"
// //         style={{
// //           animation: 'radar-sweep 4s linear infinite',
// //           transformOrigin: '100px 100px'
// //         }}
// //       />
// //     </svg>
    
// //     <style>{`
// //       @keyframes radar-sweep {
// //         from { transform: rotate(0deg); }
// //         to { transform: rotate(360deg); }
// //       }
// //     `}</style>
// //   </div>
// // );

// // const Timeline = () => {
// //   const events = [
// //     { year: '2018-2022', label: 'B.TECH CS', status: 'complete' },
// //     { year: '2021-2022', label: 'KAMEDA INFOLOGICS', status: 'complete' },
// //     { year: '2022-2023', label: 'CDATA (LEVEL I)', status: 'complete' },
// //     { year: '2023-2024', label: 'CDATA (LEVEL II)', status: 'complete' },
// //     { year: '2024-2026', label: 'MASTERS AI', status: 'active' },
// //     { year: '2025-PRESENT', label: 'DSMRL RESEARCH', status: 'active' },
// //     { year: '2026+', label: 'PhD TARGET', status: 'pending' }
// //   ];

// //   return (
// //     <div>
// //       {events.map((event, i) => (
// //         <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
// //           <div style={{ 
// //             width: '12px', 
// //             height: '12px', 
// //             borderRadius: '50%',
// //             flexShrink: 0,
// //             background: event.status === 'complete' ? '#00ff88' :
// //                        event.status === 'active' ? '#00d9ff' : 'rgba(0, 217, 255, 0.3)',
// //             boxShadow: event.status === 'complete' ? '0 0 10px #00ff88' :
// //                       event.status === 'active' ? '0 0 10px #00d9ff' : 'none',
// //             animation: event.status === 'active' ? 'pulse 2s infinite' : 'none'
// //           }} />
// //           <div style={{ flex: 1, minWidth: 0 }}>
// //             <div style={{ fontSize: '11px', color: '#7dd3fc' }}>{event.year}</div>
// //             <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#e0f7ff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{event.label}</div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MissionControlPortfolio;

// import React, { useState, useEffect, useRef } from 'react';
// import { Camera, Cpu, Code, Mail, Github, Linkedin, Terminal, Activity } from 'lucide-react';

// const MissionControlPortfolio = () => {
//   const [currentStatus, setCurrentStatus] = useState('RESEARCHING');
//   const [activePanel, setActivePanel] = useState('overview');
//   const canvasRef = useRef(null);

//   // Enhanced dynamic background
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     for (let i = 0; i < 150; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.8,
//         vy: (Math.random() - 0.5) * 0.8,
//         size: Math.random() * 2.5,
//         opacity: Math.random() * 0.5 + 0.3
//       });
//     }

//     const waves = [];
//     for (let i = 0; i < 3; i++) {
//       waves.push({
//         y: Math.random() * canvas.height,
//         amplitude: 20 + Math.random() * 30,
//         frequency: 0.01 + Math.random() * 0.02,
//         phase: Math.random() * Math.PI * 2,
//         speed: 0.02 + Math.random() * 0.03,
//         opacity: 0.1 + Math.random() * 0.2
//       });
//     }

//     const dataStreams = [];
//     for (let i = 0; i < 20; i++) {
//       dataStreams.push({
//         x: Math.random() * canvas.width,
//         y: -Math.random() * canvas.height,
//         speed: 1 + Math.random() * 2,
//         chars: Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')
//       });
//     }

//     let scanlineY = 0;
//     let scanlineDirection = 1;
//     let frame = 0;

//     const animate = () => {
//       ctx.fillStyle = 'rgba(5, 8, 18, 0.15)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       waves.forEach(wave => {
//         wave.phase += wave.speed;
//         ctx.beginPath();
//         ctx.strokeStyle = `rgba(0, 217, 255, ${wave.opacity})`;
//         ctx.lineWidth = 1.5;
//         for (let x = 0; x < canvas.width; x += 5) {
//           const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
//           if (x === 0) ctx.moveTo(x, y);
//           else ctx.lineTo(x, y);
//         }
//         ctx.stroke();
//       });

//       dataStreams.forEach(stream => {
//         stream.y += stream.speed;
//         if (stream.y > canvas.height) {
//           stream.y = -100;
//           stream.x = Math.random() * canvas.width;
//         }
//         ctx.font = '12px monospace';
//         stream.chars.forEach((char, i) => {
//           const opacity = 1 - (i / stream.chars.length);
//           ctx.fillStyle = `rgba(0, 255, 136, ${opacity * 0.3})`;
//           ctx.fillText(char, stream.x, stream.y + i * 15);
//         });
//       });

//       particles.forEach((p, i) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         particles.slice(i + 1).forEach(p2 => {
//           const dx = p2.x - p.x;
//           const dy = p2.y - p.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 100) {
//             ctx.strokeStyle = `rgba(0, 217, 255, ${(1 - distance / 100) * 0.2})`;
//             ctx.lineWidth = 0.5;
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });

//         ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = 'rgba(0, 217, 255, 0.5)';
//         ctx.fill();
//         ctx.shadowBlur = 0;
//       });

//       scanlineY += scanlineDirection * 3;
//       if (scanlineY > canvas.height || scanlineY < 0) scanlineDirection *= -1;
//       ctx.strokeStyle = 'rgba(0, 217, 255, 0.15)';
//       ctx.lineWidth = 2;
//       ctx.beginPath();
//       ctx.moveTo(0, scanlineY);
//       ctx.lineTo(canvas.width, scanlineY);
//       ctx.stroke();

//       if (frame % 60 === 0) {
//         const pulseX = Math.random() * canvas.width;
//         const pulseY = Math.random() * canvas.height;
//         for (let r = 0; r < 5; r++) {
//           setTimeout(() => {
//             ctx.strokeStyle = `rgba(255, 51, 102, ${0.5 - r * 0.1})`;
//             ctx.lineWidth = 2;
//             ctx.beginPath();
//             ctx.arc(pulseX, pulseY, r * 30, 0, Math.PI * 2);
//             ctx.stroke();
//           }, r * 100);
//         }
//       }

//       frame++;
//       requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const statuses = ['RESEARCHING', 'CODING', 'LEARNING', 'INNOVATING'];
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % statuses.length;
//       setCurrentStatus(statuses[index]);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       background: '#050812', 
//       color: '#e0f7ff', 
//       fontFamily: 'monospace',
//       position: 'relative',
//       overflow: 'auto'
//     }}>
//       {/* Background Canvas */}
//       <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />

//       {/* Grid Overlay */}
//       <div style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
//         backgroundSize: '50px 50px',
//         opacity: 0.2,
//         zIndex: 1,
//         pointerEvents: 'none'
//       }} />

//       {/* Main Content */}
//       <div style={{ position: 'relative', zIndex: 10, padding: '20px', width: '100%', boxSizing: 'border-box' }}>
        
//         {/* Header */}
//         <div style={{
//           border: '3px solid #00d9ff',
//           background: 'rgba(10, 14, 39, 0.95)',
//           padding: '20px',
//           borderRadius: '10px',
//           marginBottom: '20px',
//           boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '20px'
//         }}>
//           <div>
//             <h1 style={{ 
//               fontSize: '32px', 
//               fontWeight: 'bold', 
//               color: '#00ffff', 
//               margin: '0 0 10px 0',
//               fontFamily: "'Orbitron', monospace",
//               letterSpacing: '3px'
//             }}>
//               SHASHANK CHAUHAN
//             </h1>
//             <div style={{ fontSize: '14px', color: '#7dd3fc' }}>
//               GRADUATE STUDENT // AI-ML RESEARCHER // DATA SCIENTIST
//             </div>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//             <div style={{ textAlign: 'right' }}>
//               <div style={{ fontSize: '12px', color: '#7dd3fc' }}>CURRENT STATUS</div>
//               <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff3366' }}>{currentStatus}</div>
//             </div>
//             <Activity size={32} color="#00ffff" style={{ animation: 'pulse 2s infinite' }} />
//           </div>
//         </div>

//         {/* Main Layout - Using Flexbox instead of Grid */}
//         <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
//           {/* Left Sidebar */}
//           <div style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
//             {/* Certificates Panel */}
//             <div style={{
//               border: '3px solid #00d9ff',
//               background: 'rgba(10, 14, 39, 0.95)',
//               padding: '20px',
//               borderRadius: '10px',
//               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
//                 <Terminal size={20} color="#00ffff" />
//                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>CERTIFICATES</h2>
//               </div>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//                 <CertificateItem text="Machine Learning Specialization by Andrew NG" />
//                 <CertificateItem text="React Basics and Advanced React by Meta on Coursera" />
//                 <CertificateItem text="Full Stack Cloud Development Capstone Project by IBM" />
//                 <CertificateItem text="Generative AI with Large Language Models by AWS and DeepLearning.AI" />
//                 <CertificateItem text="Building Systems with the ChatGPT API by OpenAI and DeepLearning.AI" />
//               </div>
//             </div>

//             {/* Status Panel */}
//             <div style={{
//               border: '3px solid #00d9ff',
//               background: 'rgba(10, 14, 39, 0.95)',
//               padding: '20px',
//               borderRadius: '10px',
//               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
//                 <Activity size={20} color="#00ffff" />
//                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>SYSTEM STATUS</h2>
//               </div>
//               <StatusLine label="LOCATION" value="Dearborn, MI" status="active" />
//               <StatusLine label="GPA" value="4.0 / 4.0" status="active" />
//               <StatusLine label="GRADUATION" value="April 2026" status="scheduled" />
//               <StatusLine label="PUBLICATIONS" value="3 PAPERS" status="active" />
//               <StatusLine label="EXPERIENCE" value="3+ YEARS" status="active" />
//             </div>

//             {/* Contact Panel */}
//             <div style={{
//               border: '3px solid #00d9ff',
//               background: 'rgba(10, 14, 39, 0.95)',
//               padding: '20px',
//               borderRadius: '10px',
//               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
//                 <Mail size={20} color="#00ffff" />
//                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>COMMUNICATION LINKS</h2>
//               </div>
//               <ContactButton icon={<Mail size={16} />} label="EMAIL" href="mailto:shashanc@umich.edu" />
//               <ContactButton icon={<Github size={16} />} label="GITHUB" href="https://github.com/chauhan-sh" />
//               <ContactButton icon={<Linkedin size={16} />} label="LINKEDIN" href="https://www.linkedin.com/in/chauhan-sh/" />
//             </div>
//           </div>

//           {/* Center Content */}
//           <div style={{ flex: '2 1 500px', minWidth: '300px' }}>
//             {/* Tabs */}
//             <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
//               {['overview', 'research', 'projects', 'experience', 'skills'].map(tab => (
//                 <button
//                   key={tab}
//                   onClick={() => setActivePanel(tab)}
//                   style={{
//                     padding: '12px 20px',
//                     fontSize: '12px',
//                     fontWeight: 'bold',
//                     borderRadius: '8px 8px 0 0',
//                     border: activePanel === tab ? '3px solid #00ffff' : '3px solid rgba(0, 217, 255, 0.5)',
//                     borderBottom: 'none',
//                     background: activePanel === tab ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.6)',
//                     color: activePanel === tab ? '#00ffff' : '#7dd3fc',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s',
//                     boxShadow: activePanel === tab ? '0 -5px 20px rgba(0, 217, 255, 0.5)' : 'none'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.color = '#00ffff';
//                     e.target.style.borderColor = '#00ffff';
//                   }}
//                   onMouseLeave={(e) => {
//                     if (activePanel !== tab) {
//                       e.target.style.color = '#7dd3fc';
//                       e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//                     }
//                   }}
//                 >
//                   {tab.toUpperCase()}
//                 </button>
//               ))}
//             </div>

//             {/* Content Area */}
//             <div style={{
//               border: '3px solid #00d9ff',
//               background: 'rgba(10, 14, 39, 0.95)',
//               padding: '30px',
//               borderRadius: '10px',
//               boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
//               minHeight: '500px'
//             }}>
//               {activePanel === 'overview' && <OverviewPanel />}
//               {activePanel === 'research' && <ResearchPanel />}
//               {activePanel === 'projects' && <ProjectsPanel />}
//               {activePanel === 'experience' && <ExperiencePanel />}
//               {activePanel === 'skills' && <SkillsPanel />}
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
//             {/* Radar */}
//             <div style={{
//               border: '3px solid #00d9ff',
//               background: 'rgba(10, 14, 39, 0.95)',
//               padding: '20px',
//               borderRadius: '10px',
//               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
//                 <Camera size={20} color="#00ffff" />
//                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>TECH RADAR</h2>
//               </div>
//               <RadarDisplay />
//             </div>

//             {/* Timeline */}
//             <div style={{
//               border: '3px solid #00d9ff',
//               background: 'rgba(10, 14, 39, 0.95)',
//               padding: '20px',
//               borderRadius: '10px',
//               boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
//                 <Cpu size={20} color="#00ffff" />
//                 <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>MISSION TIMELINE</h2>
//               </div>
//               <Timeline />
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div style={{ 
//           textAlign: 'center', 
//           fontSize: '12px', 
//           color: '#7dd3fc', 
//           borderTop: '2px solid rgba(0, 217, 255, 0.3)', 
//           paddingTop: '20px',
//           marginTop: '40px'
//         }}>
//           MISSION CONTROL v2.0 // ALL SYSTEMS OPERATIONAL // © 2024 SHASHANK
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//       `}</style>
//     </div>
//   );
// };

// // Components with inline styles
// const CertificateItem = ({ text }) => (
//   <div style={{
//     padding: '10px 12px',
//     background: 'rgba(5, 8, 18, 0.6)',
//     border: '1px solid rgba(0, 217, 255, 0.3)',
//     borderRadius: '6px',
//     fontSize: '11px',
//     color: '#c9e9f6',
//     lineHeight: '1.5',
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '8px'
//   }}>
//     <span style={{ color: '#00ff88', fontSize: '12px', flexShrink: 0 }}>✓</span>
//     <span>{text}</span>
//   </div>
// );

// const StatBar = ({ label, value, color }) => (
//   <div style={{ marginBottom: '15px' }}>
//     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
//       <span style={{ color: '#7dd3fc' }}>{label}</span>
//       <span style={{ color: '#00ffff', fontWeight: 'bold' }}>{value}%</span>
//     </div>
//     <div style={{ height: '8px', background: '#0a0e27', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(0, 217, 255, 0.4)' }}>
//       <div style={{ 
//         width: `${value}%`, 
//         height: '100%',
//         background: `linear-gradient(90deg, ${color}, ${color}dd)`,
//         boxShadow: `0 0 10px ${color}`,
//         transition: 'width 1s ease-out'
//       }} />
//     </div>
//   </div>
// );

// const StatusLine = ({ label, value, status }) => (
//   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '14px' }}>
//     <span style={{ color: '#7dd3fc' }}>{label}:</span>
//     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//       <span style={{ color: '#e0f7ff', fontWeight: 'bold' }}>{value}</span>
//       <div style={{ 
//         width: '8px', 
//         height: '8px', 
//         borderRadius: '50%',
//         background: status === 'active' ? '#00ff88' : '#ff9900',
//         boxShadow: `0 0 10px ${status === 'active' ? '#00ff88' : '#ff9900'}`,
//         animation: status === 'active' ? 'pulse 2s infinite' : 'none'
//       }} />
//     </div>
//   </div>
// );

// const ContactButton = ({ icon, label, href }) => (
//   <a 
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '12px 15px',
//       background: '#0a0e27',
//       border: '2px solid rgba(0, 217, 255, 0.5)',
//       borderRadius: '8px',
//       color: '#7dd3fc',
//       textDecoration: 'none',
//       fontSize: '12px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//       transition: 'all 0.3s',
//       cursor: 'pointer'
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.borderColor = '#00ffff';
//       e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.6)';
//       e.currentTarget.style.color = '#00ffff';
//       e.currentTarget.style.transform = 'scale(1.02)';
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//       e.currentTarget.style.boxShadow = 'none';
//       e.currentTarget.style.color = '#7dd3fc';
//       e.currentTarget.style.transform = 'scale(1)';
//     }}
//   >
//     <div style={{ color: '#00ffff' }}>{icon}</div>
//     <span>{label}</span>
//   </a>
// );

// const OverviewPanel = () => (
//   <div>
//     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
//       MISSION OBJECTIVE
//     </h3>
//     <p style={{ color: '#c9e9f6', lineHeight: '1.8', marginBottom: '30px' }}>
//       Research Assistant at Data Science and Management Research Lab (DSMRL), University of Michigan-Dearborn. 
//       Pursuing Master's in Artificial Intelligence (GPA: 4.0/4.0). Specializing in Machine Learning, 
//       Large Language Models, and AI-driven systems. Former Software Development Engineer at CData Software with 
//       3+ years of experience building scalable cloud platforms.
//     </p>
    
//     <div style={{
//       border: '2px solid rgba(0, 217, 255, 0.5)',
//       background: 'rgba(5, 8, 18, 0.6)',
//       padding: '20px',
//       borderRadius: '8px',
//       marginBottom: '30px'
//     }}>
//       <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
//         🌟 RECENT HIGHLIGHT
//       </h4>
//       <p style={{ color: '#c9e9f6', lineHeight: '1.6', fontSize: '13px' }}>
//         <strong style={{ color: '#00ff88' }}>Attended The Composable Conference 2025</strong> at Willis Tower, Chicago! 
//         Honored to join a global community of forward-thinkers at the annual event hosted by <strong>MACH Alliance</strong>. 
//         As a MACH Curious, explored how composable architecture and MACH principles — Microservices, API-first, 
//         Cloud-native, Headless — are shaping the future of digital ecosystems. Engaged in conversations on AI innovations, 
//         Automation, Interoperability, and how leading brands embrace composable strategies to future-proof their tech stacks.
//       </p>
//     </div>
    
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
//       <MetricCard label="GPA" value="4.0" sublabel="PERFECT SCORE" />
//       <MetricCard label="EXPERIENCE" value="3+" sublabel="YEARS" />
//       <MetricCard label="PROJECTS" value="15+" sublabel="COMPLETED" />
//       <MetricCard label="PUBLICATIONS" value="3" sublabel="RESEARCH PAPERS" />
//     </div>
    
//     <div style={{ borderTop: '2px solid rgba(0, 217, 255, 0.3)', paddingTop: '20px' }}>
//       <div style={{ fontSize: '12px', color: '#7dd3fc', marginBottom: '10px' }}>PRIMARY MISSION TARGET</div>
//       <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff3366' }}>PhD ADMISSION 2026</div>
//       <div style={{ fontSize: '12px', color: '#7dd3fc', marginTop: '10px' }}>RESEARCH FOCUS: Artificial Intelligence, Machine Learning, Deep Learning, LLMs, Data Science</div>
//     </div>
//   </div>
// );

// const ResearchPanel = () => (
//   <div>
//     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
//       RESEARCH OPERATIONS
//     </h3>
    
//     <ResearchCard 
//       title="EXPLORE-EXPLOIT FRAMEWORK - DSMRL"
//       description="Devised an EE framework adapting survey timing based on participant behavior and real-time air quality. Integrated Gaussian Process Regression with confidence interval-based decision-making. Technologies: Python, Scikit-learn, FastAPI, Twilio API."
//       status="ACTIVE"
//     />
    
//     <ResearchCard 
//       title="BLOCKCHAIN IOT FOR SMART CITIES"
//       description="Authored chapter 'Blockchain IoT Concepts for Smart Cities' in CRC-Press Taylor & Francis book. Enhanced reliability and impact of urban infrastructure through IoT and Blockchain integration."
//       status="PUBLISHED"
//     />
    
//     <ResearchCard 
//       title="BLOCKCHAIN IN HEALTHCARE"
//       description="Built pharmaceutical supply chain tracking system with remote patient monitoring. Achieved 3X higher efficiency. Presented at ICAAIC-22 and published in IJSER-21."
//       status="PUBLISHED"
//     />
//   </div>
// );

// const ResearchCard = ({ title, description, status }) => (
//   <div style={{
//     border: '2px solid rgba(0, 217, 255, 0.5)',
//     background: 'rgba(5, 8, 18, 0.8)',
//     padding: '20px',
//     borderRadius: '8px',
//     marginBottom: '15px',
//     transition: 'all 0.3s',
//     cursor: 'pointer'
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.borderColor = '#00ffff';
//     e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//     e.currentTarget.style.boxShadow = 'none';
//   }}>
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '10px' }}>
//       <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0, flex: 1 }}>{title}</h4>
//       <span style={{
//         fontSize: '10px',
//         padding: '4px 8px',
//         borderRadius: '4px',
//         fontWeight: 'bold',
//         background: status === 'ACTIVE' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 153, 0, 0.3)',
//         color: status === 'ACTIVE' ? '#00ff88' : '#ff9900',
//         boxShadow: status === 'ACTIVE' ? '0 0 10px #00ff88' : '0 0 10px #ff9900',
//         whiteSpace: 'nowrap'
//       }}>
//         {status}
//       </span>
//     </div>
//     <p style={{ fontSize: '12px', color: '#c9e9f6', lineHeight: '1.6', margin: 0 }}>{description}</p>
//   </div>
// );

// const ProjectsPanel = () => (
//   <div>
//     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
//       DEPLOYED SYSTEMS
//     </h3>
    
//     <ProjectCard 
//       title="ADAPTIVE CHATBOT WITH LLMs"
//       tech="Python, OpenAI API, LangChain, ReactJS, Docker"
//       description="Domain-specific chatbot platform with fine-tuned GPT-3 models. Integrated user-uploaded documents for personalized assistance."
//     />
    
//     <ProjectCard 
//       title="AUTONOMOUS AI CLOUD OPTIMIZER"
//       tech="Reinforcement Learning, GPT-3, AWS, Terraform"
//       description="Multi-agent AI system using RL to dynamically optimize cloud costs across AWS, Azure, GCP."
//     />
    
//     <ProjectCard 
//       title="PART OF SPEECH TAGGER"
//       tech="PyTorch, spaCy, Transformers, NLTK"
//       description="Deep Learning Bi-LSTM model for POS tagging across multiple languages. Achieved over 91% accuracy."
//     />
//   </div>
// );

// const ExperiencePanel = () => (
//   <div>
//     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
//       PROFESSIONAL EXPERIENCE
//     </h3>
    
//     <ExperienceCard 
//       title="CData Software"
//       role="Software Development Engineer – Level II"
//       location="Bengaluru, India"
//       period="Apr 2023 – Jul 2024"
//       responsibilities={[
//         "Developed and maintained front-end and back-end features for the CData Connect Cloud Platform.",
//         "Optimized the Async Query Processing feature that enhanced query execution performance and decreased query response time by almost half.",
//         "Architected and coded the API Connector that streamlined integration with external APIs and minimized manual IT intervention by 35%. This solution also minimized costs and effort required to create drivers for new data sources.",
//         "Revamped Dataset feature to improve data organization that allows users to easily manage datasets and improves data handling.",
//         "Utilized xUnit and NUnit for unit and integration testing that increased the code coverage by 35% and cut down production bugs by approx. 20%."
//       ]}
//       tech="C#, dotnet, Java, Spring Boot, Kotlin, ReactJS, Typescript, NodeJS, Postgres, DynamoDB, Terraform, xUnit, NUnit, Azure"
//     />
    
//     <ExperienceCard 
//       title="CData Software"
//       role="Software Development Engineer – Level I"
//       location="Bengaluru, India"
//       period="Apr 2022 - Mar 2023"
//       responsibilities={[
//         "Led the project of developing a Python connector for the CData Connect Cloud platform, adhering to PEP 249 – Python Database API Specification.",
//         "Programmed these cursor methods: execute, executemany, fetchone, fetchmany, fetchall, nextset; that allows interaction with the Connect Cloud."
//       ]}
//       tech="Python, R, Shell, MySQL, Postgres, Pytest"
//     />
    
//     <ExperienceCard 
//       title="Kameda Infologics"
//       role="Software Engineer Intern"
//       location="Trivandrum, India"
//       period="Aug 2021 - Mar 2022"
//       responsibilities={[
//         "Contributed as a front-end developer on the YASASII project, a healthcare portal. Established admin connectivity and patient records pages.",
//         "Verified the end-to-end working of the portal and added over 72 unit and integration tests for the portal to ensure the reliability."
//       ]}
//       tech="ReactJS, NodeJS, JavaScript, HTML, CSS, Redis, MongoDB, Jest"
//     />
//   </div>
// );

// const ExperienceCard = ({ title, role, location, period, responsibilities, tech }) => (
//   <div style={{
//     border: '2px solid rgba(0, 217, 255, 0.5)',
//     background: 'rgba(5, 8, 18, 0.8)',
//     padding: '20px',
//     borderRadius: '8px',
//     marginBottom: '20px',
//     transition: 'all 0.3s',
//     cursor: 'pointer'
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.borderColor = '#00ffff';
//     e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//     e.currentTarget.style.boxShadow = 'none';
//   }}>
//     <div style={{ marginBottom: '12px' }}>
//       <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#00ffff', margin: '0 0 5px 0' }}>{title}</h4>
//       <div style={{ fontSize: '14px', color: '#7dd3fc', marginBottom: '3px' }}>{role}</div>
//       <div style={{ fontSize: '12px', color: '#7dd3fc', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
//         <span>{location}</span>
//         <span style={{ color: '#00ff88' }}>{period}</span>
//       </div>
//     </div>
    
//     <ul style={{ margin: '15px 0', paddingLeft: '20px', color: '#c9e9f6', fontSize: '12px', lineHeight: '1.8' }}>
//       {responsibilities.map((resp, idx) => (
//         <li key={idx} style={{ marginBottom: '8px' }}>{resp}</li>
//       ))}
//     </ul>
    
//     <div style={{ 
//       fontSize: '11px', 
//       color: '#ff9900', 
//       fontWeight: 'bold', 
//       marginTop: '12px',
//       paddingTop: '12px',
//       borderTop: '1px solid rgba(0, 217, 255, 0.2)'
//     }}>
//       Technologies: {tech}
//     </div>
//   </div>
// );

// const ProjectCard = ({ title, tech, description }) => (
//   <div style={{
//     border: '2px solid rgba(0, 217, 255, 0.5)',
//     background: 'rgba(5, 8, 18, 0.8)',
//     padding: '20px',
//     borderRadius: '8px',
//     marginBottom: '15px',
//     transition: 'all 0.3s',
//     cursor: 'pointer'
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.borderColor = '#00ffff';
//     e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
//     e.currentTarget.querySelector('h4').style.color = '#00ff88';
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//     e.currentTarget.style.boxShadow = 'none';
//     e.currentTarget.querySelector('h4').style.color = '#00ffff';
//   }}>
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
//       <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0, transition: 'color 0.3s' }}>{title}</h4>
//       <Code size={16} color="#7dd3fc" />
//     </div>
//     <div style={{ fontSize: '11px', color: '#ff9900', fontWeight: 'bold', marginBottom: '8px' }}>{tech}</div>
//     <p style={{ fontSize: '12px', color: '#c9e9f6', lineHeight: '1.6', margin: 0 }}>{description}</p>
//   </div>
// );

// const SkillsPanel = () => (
//   <div>
//     <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
//       TECHNOLOGY STACK
//     </h3>
    
//     <SkillCategory 
//       title="PROGRAMMING LANGUAGES"
//       skills={['Python', 'C++', 'Java', 'C#', 'JavaScript', 'Kotlin', 'TypeScript', 'Swift', 'R', 'PHP']}
//     />
    
//     <SkillCategory 
//       title="AI/ML FRAMEWORKS & LIBRARIES"
//       skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'Hugging Face', 'spaCy', 'NLTK', 'XGBoost', 'LightGBM']}
//     />
    
//     <SkillCategory 
//       title="WEB & CLOUD TECHNOLOGIES"
//       skills={['ReactJS', 'NodeJS', 'Spring Boot', 'FastAPI', 'AWS', 'Docker', 'Terraform', 'Azure']}
//     />
    
//     <SkillCategory 
//       title="DATABASES"
//       skills={['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Neo4j', 'SQL Server']}
//     />
    
//     <SkillCategory 
//       title="AI/ML TOOLS & PLATFORMS"
//       skills={['GPT-3', 'OpenAI API', 'Stable-Baselines3', 'SageMaker', 'TensorBoard', 'BERT', 'LSTM', 'Prophet']}
//     />
//   </div>
// );

// const SkillCategory = ({ title, skills }) => (
//   <div style={{ marginBottom: '25px' }}>
//     <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#7dd3fc', marginBottom: '12px' }}>{title}</h4>
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//       {skills.map(skill => (
//         <span 
//           key={skill}
//           style={{
//             padding: '8px 12px',
//             background: '#0a0e27',
//             border: '2px solid rgba(0, 217, 255, 0.5)',
//             borderRadius: '6px',
//             fontSize: '12px',
//             color: '#e0f7ff',
//             fontWeight: 'bold',
//             transition: 'all 0.3s',
//             cursor: 'default'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.borderColor = '#00ffff';
//             e.target.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.6)';
//             e.target.style.color = '#00ffff';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//             e.target.style.boxShadow = 'none';
//             e.target.style.color = '#e0f7ff';
//           }}
//         >
//           {skill}
//         </span>
//       ))}
//     </div>
//   </div>
// );

// const MetricCard = ({ label, value, sublabel }) => (
//   <div style={{
//     background: '#050812',
//     border: '2px solid rgba(0, 217, 255, 0.5)',
//     padding: '20px',
//     borderRadius: '8px',
//     textAlign: 'center',
//     transition: 'all 0.3s',
//     cursor: 'default'
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.borderColor = '#00ffff';
//     e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.5)';
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
//     e.currentTarget.style.boxShadow = 'none';
//   }}>
//     <div style={{ fontSize: '12px', color: '#7dd3fc', marginBottom: '5px' }}>{label}</div>
//     <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00ffff', marginBottom: '5px' }}>{value}</div>
//     <div style={{ fontSize: '12px', color: '#00ff88' }}>{sublabel}</div>
//   </div>
// );

// const RadarDisplay = () => {
//   const [radarAngle, setRadarAngle] = React.useState(0);
  
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setRadarAngle(prev => (prev + 2) % 360);
//     }, 33); // ~30fps
//     return () => clearInterval(interval);
//   }, []);
  
//   const dots = [
//     { cx: 140, cy: 70, angle: Math.atan2(70 - 100, 140 - 100) * (180 / Math.PI), label: 'Machine Learning', color: '#00ff88' },
//     { cx: 75, cy: 55, angle: Math.atan2(55 - 100, 75 - 100) * (180 / Math.PI), label: 'Artificial Intelligence', color: '#00d9ff' },
//     { cx: 120, cy: 130, angle: Math.atan2(130 - 100, 120 - 100) * (180 / Math.PI), label: 'Deep Learning', color: '#ff3366' },
//     { cx: 60, cy: 120, angle: Math.atan2(120 - 100, 60 - 100) * (180 / Math.PI), label: 'Data Science', color: '#ff9900' }
//   ];
  
//   const isNearAngle = (dotAngle, radarAngle) => {
//     const normalizedDotAngle = (dotAngle + 360) % 360;
//     const diff = Math.abs(normalizedDotAngle - radarAngle);
//     return diff < 30 || diff > 330;
//   };
  
//   return (
//     <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
//       <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
//         {[0, 1, 2, 3, 4].map(i => (
//           <circle
//             key={i}
//             cx="100"
//             cy="100"
//             r={20 + i * 20}
//             fill="none"
//             stroke="rgba(0, 217, 255, 0.4)"
//             strokeWidth="1.5"
//           />
//         ))}
//         <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
//         <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
//         <line x1="30" y1="30" x2="170" y2="170" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
//         <line x1="170" y1="30" x2="30" y2="170" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
        
//         {dots.map((dot, idx) => (
//           <g key={idx}>
//             <circle 
//               cx={dot.cx} 
//               cy={dot.cy} 
//               r={isNearAngle(dot.angle, radarAngle) ? "7" : "5"} 
//               fill={dot.color}
//               style={{
//                 filter: isNearAngle(dot.angle, radarAngle) ? `drop-shadow(0 0 5px ${dot.color})` : 'none',
//                 transition: 'all 0.2s'
//               }}
//             />
//             {isNearAngle(dot.angle, radarAngle) && (
//               <text
//                 x={dot.cx}
//                 y={dot.cy - 15}
//                 textAnchor="middle"
//                 fill={dot.color}
//                 fontSize="9"
//                 fontWeight="bold"
//                 style={{
//                   filter: `drop-shadow(0 0 3px ${dot.color})`,
//                   animation: 'fadeIn 0.3s'
//                 }}
//               >
//                 {dot.label}
//               </text>
//             )}
//           </g>
//         ))}
        
//         <line 
//           x1="100" 
//           y1="100" 
//           x2="100" 
//           y2="20" 
//           stroke="rgba(0, 255, 255, 0.8)" 
//           strokeWidth="3"
//           style={{
//             transformOrigin: '100px 100px',
//             transform: `rotate(${radarAngle}deg)`
//           }}
//         />
//       </svg>
      
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// const Timeline = () => {
//   const events = [
//     { startYear: '2018', endYear: '2022', label: 'B.Tech Computer Science', status: 'complete', color: '#00ff88' },
//     { startYear: '2021', endYear: '2022', label: 'Kameda Infologics - Software Engineer Intern', status: 'complete', color: '#00ff88' },
//     { startYear: '2022', endYear: '2023', label: 'CData Software - Software Engineer I', status: 'complete', color: '#00ff88' },
//     { startYear: '2023', endYear: '2024', label: 'CData Software - Software Engineer II', status: 'complete', color: '#00ff88' },
//     { startYear: '2024', endYear: '2026', label: 'Masters in AI - UMich Dearborn', status: 'active', color: '#00d9ff' },
//     { startYear: '2025', endYear: 'Present', label: 'DSMRL Research Assistant', status: 'active', color: '#00d9ff' },
//     { startYear: '2026', endYear: 'Future', label: 'PhD Program Target', status: 'pending', color: '#7dd3fc' }
//   ];

//   return (
//     <div>
//       {events.map((event, i) => (
//         <div key={i} style={{ marginBottom: '20px' }}>
//           <div style={{ fontSize: '11px', color: '#e0f7ff', fontWeight: 'bold', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//             {event.label}
//           </div>
          
//           <div style={{ position: 'relative', marginBottom: '8px' }}>
//             <div style={{ 
//               height: '6px', 
//               background: 'rgba(10, 14, 39, 0.8)', 
//               borderRadius: '10px',
//               border: '1px solid rgba(0, 217, 255, 0.3)',
//               overflow: 'hidden',
//               position: 'relative'
//             }}>
//               <div style={{ 
//                 width: event.status === 'pending' ? '0%' : event.status === 'active' ? '60%' : '100%',
//                 height: '100%',
//                 background: `linear-gradient(90deg, ${event.color}, ${event.color}dd)`,
//                 boxShadow: `0 0 10px ${event.color}`,
//                 transition: 'width 1s ease-out',
//                 animation: event.status === 'active' ? 'pulse 2s infinite' : 'none'
//               }} />
//             </div>
            
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'space-between', 
//               fontSize: '10px', 
//               color: '#7dd3fc',
//               marginTop: '4px'
//             }}>
//               <span>{event.startYear}</span>
//               <span style={{ color: event.status === 'active' ? '#00ffff' : '#7dd3fc' }}>{event.endYear}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MissionControlPortfolio;


import React, { useState, useEffect, useRef } from 'react';
import { Camera, Cpu, Code, Mail, Github, Linkedin, Terminal, Activity } from 'lucide-react';

const MissionControlPortfolio = () => {
  const [currentStatus, setCurrentStatus] = useState('RESEARCHING');
  const [activePanel, setActivePanel] = useState('overview');
  const canvasRef = useRef(null);

  // Set document title
  useEffect(() => {
    document.title = 'Shashank Chauhan Portfolio';
  }, []);

  // Enhanced dynamic background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const waves = [];
    for (let i = 0; i < 3; i++) {
      waves.push({
        y: Math.random() * canvas.height,
        amplitude: 20 + Math.random() * 30,
        frequency: 0.01 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
        opacity: 0.1 + Math.random() * 0.2
      });
    }

    const dataStreams = [];
    for (let i = 0; i < 20; i++) {
      dataStreams.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        chars: Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')
      });
    }

    let scanlineY = 0;
    let scanlineDirection = 1;
    let frame = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 8, 18, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => {
        wave.phase += wave.speed;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 217, 255, ${wave.opacity})`;
        ctx.lineWidth = 1.5;
        for (let x = 0; x < canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      dataStreams.forEach(stream => {
        stream.y += stream.speed;
        if (stream.y > canvas.height) {
          stream.y = -100;
          stream.x = Math.random() * canvas.width;
        }
        ctx.font = '12px monospace';
        stream.chars.forEach((char, i) => {
          const opacity = 1 - (i / stream.chars.length);
          ctx.fillStyle = `rgba(0, 255, 136, ${opacity * 0.3})`;
          ctx.fillText(char, stream.x, stream.y + i * 15);
        });
      });

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        particles.slice(i + 1).forEach(p2 => {
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 217, 255, ${(1 - distance / 100) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 217, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      scanlineY += scanlineDirection * 3;
      if (scanlineY > canvas.height || scanlineY < 0) scanlineDirection *= -1;
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanlineY);
      ctx.lineTo(canvas.width, scanlineY);
      ctx.stroke();

      if (frame % 60 === 0) {
        const pulseX = Math.random() * canvas.width;
        const pulseY = Math.random() * canvas.height;
        for (let r = 0; r < 5; r++) {
          setTimeout(() => {
            ctx.strokeStyle = `rgba(255, 51, 102, ${0.5 - r * 0.1})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, r * 30, 0, Math.PI * 2);
            ctx.stroke();
          }, r * 100);
        }
      }

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const statuses = ['RESEARCHING', 'CODING', 'LEARNING', 'INNOVATING'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % statuses.length;
      setCurrentStatus(statuses[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#050812', 
      color: '#e0f7ff', 
      fontFamily: 'monospace',
      position: 'relative',
      overflow: 'auto'
    }}>
      {/* Background Canvas */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />

      {/* Grid Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.2,
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '20px', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{
          border: '3px solid #00d9ff',
          background: 'rgba(10, 14, 39, 0.95)',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '20px',
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              color: '#00ffff', 
              margin: '0 0 10px 0',
              fontFamily: "'Orbitron', monospace",
              letterSpacing: '3px'
            }}>
              SHASHANK CHAUHAN
            </h1>
            <div style={{ fontSize: '14px', color: '#7dd3fc' }}>
              GRADUATE STUDENT // AI-ML RESEARCHER // SOFTWARE ENGINEER // DATA SCIENTIST
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', color: '#7dd3fc' }}>CURRENT STATUS</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff3366' }}>{currentStatus}</div>
            </div>
            <Activity size={32} color="#00ffff" style={{ animation: 'pulse 2s infinite' }} />
          </div>
        </div>

        {/* Main Layout - Using Flexbox instead of Grid */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* Left Sidebar */}
          <div style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Certificates Panel */}
            <div style={{
              border: '3px solid #00d9ff',
              background: 'rgba(10, 14, 39, 0.95)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
                <Terminal size={20} color="#00ffff" />
                <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>CERTIFICATES</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <CertificateItem text="Machine Learning Specialization by Andrew NG" />
                <CertificateItem text="React Basics and Advanced React by Meta on Coursera" />
                <CertificateItem text="Full Stack Cloud Development Capstone Project by IBM" />
                <CertificateItem text="Generative AI with Large Language Models by AWS and DeepLearning.AI" />
                <CertificateItem text="Building Systems with the ChatGPT API by OpenAI and DeepLearning.AI" />
              </div>
            </div>

            {/* Status Panel */}
            <div style={{
              border: '3px solid #00d9ff',
              background: 'rgba(10, 14, 39, 0.95)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
                <Activity size={20} color="#00ffff" />
                <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>SYSTEM STATUS</h2>
              </div>
              <StatusLine label="LOCATION" value="Dearborn, MI" status="active" />
              <StatusLine label="GPA" value="4.0 / 4.0" status="active" />
              <StatusLine label="GRADUATION" value="April 2026" status="scheduled" />
              <StatusLine label="PUBLICATIONS" value="3 PAPERS" status="active" />
              <StatusLine label="EXPERIENCE" value="3+ YEARS" status="active" />
            </div>

            {/* Contact Panel */}
            <div style={{
              border: '3px solid #00d9ff',
              background: 'rgba(10, 14, 39, 0.95)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
                <Mail size={20} color="#00ffff" />
                <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>COMMUNICATION LINKS</h2>
              </div>
              <ContactButton icon={<Mail size={16} />} label="EMAIL" href="mailto:shashanc@umich.edu" />
              <ContactButton icon={<Github size={16} />} label="GITHUB" href="https://github.com/chauhan-sh" />
              <ContactButton icon={<Linkedin size={16} />} label="LINKEDIN" href="https://www.linkedin.com/in/chauhan-sh/" />
            </div>
          </div>

          {/* Center Content */}
          <div style={{ flex: '2 1 500px', minWidth: '300px' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {['overview', 'research', 'projects', 'experience', 'skills'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActivePanel(tab)}
                  style={{
                    padding: '12px 20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    borderRadius: '8px 8px 0 0',
                    border: activePanel === tab ? '3px solid #00ffff' : '3px solid rgba(0, 217, 255, 0.5)',
                    borderBottom: 'none',
                    background: activePanel === tab ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.6)',
                    color: activePanel === tab ? '#00ffff' : '#7dd3fc',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: activePanel === tab ? '0 -5px 20px rgba(0, 217, 255, 0.5)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00ffff';
                    e.target.style.borderColor = '#00ffff';
                  }}
                  onMouseLeave={(e) => {
                    if (activePanel !== tab) {
                      e.target.style.color = '#7dd3fc';
                      e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                    }
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div style={{
              border: '3px solid #00d9ff',
              background: 'rgba(10, 14, 39, 0.95)',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
              minHeight: '500px'
            }}>
              {activePanel === 'overview' && <OverviewPanel />}
              {activePanel === 'research' && <ResearchPanel />}
              {activePanel === 'projects' && <ProjectsPanel />}
              {activePanel === 'experience' && <ExperiencePanel />}
              {activePanel === 'skills' && <SkillsPanel />}
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Radar */}
            <div style={{
              border: '3px solid #00d9ff',
              background: 'rgba(10, 14, 39, 0.95)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
                <Camera size={20} color="#00ffff" />
                <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>TECH RADAR</h2>
              </div>
              <RadarDisplay />
            </div>

            {/* Timeline */}
            <div style={{
              border: '3px solid #00d9ff',
              background: 'rgba(10, 14, 39, 0.95)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #00d9ff' }}>
                <Cpu size={20} color="#00ffff" />
                <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0 }}>TIMELINE</h2>
              </div>
              <Timeline />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          fontSize: '12px', 
          color: '#7dd3fc', 
          borderTop: '2px solid rgba(0, 217, 255, 0.3)', 
          paddingTop: '20px',
          marginTop: '40px'
        }}>
          Portfolio // © 2026 SHASHANK
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

// Components with inline styles
const CertificateItem = ({ text }) => (
  <div style={{
    padding: '10px 12px',
    background: 'rgba(5, 8, 18, 0.6)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    borderRadius: '6px',
    fontSize: '11px',
    color: '#c9e9f6',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px'
  }}>
    <span style={{ color: '#00ff88', fontSize: '12px', flexShrink: 0 }}>✓</span>
    <span>{text}</span>
  </div>
);

const StatBar = ({ label, value, color }) => (
  <div style={{ marginBottom: '15px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
      <span style={{ color: '#7dd3fc' }}>{label}</span>
      <span style={{ color: '#00ffff', fontWeight: 'bold' }}>{value}%</span>
    </div>
    <div style={{ height: '8px', background: '#0a0e27', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(0, 217, 255, 0.4)' }}>
      <div style={{ 
        width: `${value}%`, 
        height: '100%',
        background: `linear-gradient(90deg, ${color}, ${color}dd)`,
        boxShadow: `0 0 10px ${color}`,
        transition: 'width 1s ease-out'
      }} />
    </div>
  </div>
);

const StatusLine = ({ label, value, status }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '14px' }}>
    <span style={{ color: '#7dd3fc' }}>{label}:</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ color: '#e0f7ff', fontWeight: 'bold' }}>{value}</span>
      <div style={{ 
        width: '8px', 
        height: '8px', 
        borderRadius: '50%',
        background: status === 'active' ? '#00ff88' : '#ff9900',
        boxShadow: `0 0 10px ${status === 'active' ? '#00ff88' : '#ff9900'}`,
        animation: status === 'active' ? 'pulse 2s infinite' : 'none'
      }} />
    </div>
  </div>
);

const ContactButton = ({ icon, label, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 15px',
      background: '#0a0e27',
      border: '2px solid rgba(0, 217, 255, 0.5)',
      borderRadius: '8px',
      color: '#7dd3fc',
      textDecoration: 'none',
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '10px',
      transition: 'all 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#00ffff';
      e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.6)';
      e.currentTarget.style.color = '#00ffff';
      e.currentTarget.style.transform = 'scale(1.02)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.color = '#7dd3fc';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    <div style={{ color: '#00ffff' }}>{icon}</div>
    <span>{label}</span>
  </a>
);

const OverviewPanel = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
      MISSION OBJECTIVE
    </h3>
    <p style={{ color: '#c9e9f6', lineHeight: '1.8', marginBottom: '30px' }}>
      Research Assistant at Data Science and Management Research Lab (DSMRL), University of Michigan-Dearborn. 
      Pursuing Master's in Artificial Intelligence (GPA: 4.0/4.0). Specializing in Machine Learning, 
      Large Language Models, and AI-driven systems. Former Software Development Engineer at CData Software with 
      3+ years of experience building scalable cloud platforms.
    </p>
    
    <div style={{
      border: '2px solid rgba(0, 217, 255, 0.5)',
      background: 'rgba(5, 8, 18, 0.6)',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px'
    }}>
      <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        🌟 RECENT HIGHLIGHT
      </h4>
      <p style={{ color: '#c9e9f6', lineHeight: '1.6', fontSize: '13px' }}>
        <strong style={{ color: '#00ff88' }}>Attended The Composable Conference 2025</strong> at Willis Tower, Chicago! 
        Honored to join a global community of forward-thinkers at the annual event hosted by <strong>MACH Alliance</strong>. 
        As a MACH Curious, explored how composable architecture and MACH principles — Microservices, API-first, 
        Cloud-native, Headless — are shaping the future of digital ecosystems. Engaged in conversations on AI innovations, 
        Automation, Interoperability, and how leading brands embrace composable strategies to future-proof their tech stacks.
      </p>
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
      <MetricCard label="GPA" value="4.0" sublabel="PERFECT SCORE" />
      <MetricCard label="EXPERIENCE" value="3+" sublabel="YEARS" />
      <MetricCard label="PROJECTS" value="15+" sublabel="COMPLETED" />
      <MetricCard label="PUBLICATIONS" value="3" sublabel="RESEARCH PAPERS" />
    </div>
    
    {/* <div style={{ borderTop: '2px solid rgba(0, 217, 255, 0.3)', paddingTop: '20px' }}>
      <div style={{ fontSize: '12px', color: '#7dd3fc', marginBottom: '10px' }}>PRIMARY MISSION TARGET</div>
      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff3366' }}>PhD ADMISSION 2026</div>
      <div style={{ fontSize: '12px', color: '#7dd3fc', marginTop: '10px' }}>RESEARCH FOCUS: Artificial Intelligence, Machine Learning, Deep Learning, LLMs, Data Science</div>
    </div> */}
  </div>
);

const ResearchPanel = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
      RESEARCH OPERATIONS
    </h3>
    
    <ResearchCard 
      title="EXPLORE-EXPLOIT FRAMEWORK - DSMRL"
      description="Devised an EE framework adapting survey timing based on participant behavior and real-time air quality. Integrated Gaussian Process Regression with confidence interval-based decision-making. Technologies: Python, Scikit-learn, FastAPI, Twilio API."
      status="ACTIVE"
    />
    
    <ResearchCard 
      title="BLOCKCHAIN IOT FOR SMART CITIES"
      description="Authored chapter 'Blockchain IoT Concepts for Smart Cities' in CRC-Press Taylor & Francis book. Enhanced reliability and impact of urban infrastructure through IoT and Blockchain integration."
      status="PUBLISHED"
    />
    
    <ResearchCard 
      title="BLOCKCHAIN IN HEALTHCARE"
      description="Built pharmaceutical supply chain tracking system with remote patient monitoring. Achieved 3X higher efficiency. Presented at ICAAIC-22 and published in IJSER-21."
      status="PUBLISHED"
    />
  </div>
);

const ResearchCard = ({ title, description, status }) => (
  <div style={{
    border: '2px solid rgba(0, 217, 255, 0.5)',
    background: 'rgba(5, 8, 18, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
    transition: 'all 0.3s',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#00ffff';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
    e.currentTarget.style.boxShadow = 'none';
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '10px' }}>
      <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0, flex: 1 }}>{title}</h4>
      <span style={{
        fontSize: '10px',
        padding: '4px 8px',
        borderRadius: '4px',
        fontWeight: 'bold',
        background: status === 'ACTIVE' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 153, 0, 0.3)',
        color: status === 'ACTIVE' ? '#00ff88' : '#ff9900',
        boxShadow: status === 'ACTIVE' ? '0 0 10px #00ff88' : '0 0 10px #ff9900',
        whiteSpace: 'nowrap'
      }}>
        {status}
      </span>
    </div>
    <p style={{ fontSize: '12px', color: '#c9e9f6', lineHeight: '1.6', margin: 0 }}>{description}</p>
  </div>
);

const ProjectsPanel = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
      DEPLOYED SYSTEMS
    </h3>
    
    <ProjectCard 
      title="ADAPTIVE CHATBOT WITH LLMs"
      tech="Python, OpenAI API, LangChain, Hugging Face Transformers, ReactJS, NodeJS, Docker, MongoDB"
      description="Domain-specific chatbot platform with fine-tuned GPT-3 models. Integrated user-uploaded documents for personalized assistance."
    />
    
    <ProjectCard 
      title="AUTONOMOUS AI CLOUD OPTIMIZER"
      tech="Reinforcement Learning, OpenAI API, LocalStack, MinIO, AWS CloudWatch, Terraform, Matplotlib"
      description="Multi-agent AI system using RL to dynamically optimize cloud costs across AWS, Azure, GCP."
    />
    
    <ProjectCard 
      title="TOPIC MODELING WITH LDA"
      tech="Python, NumPy, Scikit-learn, pyLDAvis, NLTK, Matplotlib"
      description="Implemented Latent Dirichlet Allocation from scratch using Gibbs sampling on 20 Newsgroups dataset. Modeled document-topic and topic-word distributions with hyperparameter tuning. Achieved optimal coherence score of -1.63 and perplexity of 1547.39 after 200 iterations."
    />
    
    <ProjectCard 
      title="TEXT SUMMARIZATION WITH LLM EVALUATION"
      tech="Python, LangChain, Transformers, OpenAI API, Anthropic API, Gemini API"
      description="Built automated text summarization evaluation system benchmarking GPT-4, Claude, Llama, and Gemini using prompt tuning (zero-shot, few-shot, role-based). Designed LLM-as-a-Judge pipeline assessing clarity, coherence, conciseness, and faithfulness."
    />
    
    <ProjectCard 
      title="DISEASE PREDICTION SYSTEM"
      tech="Python, XGBoost, LightGBM, Scikit-learn, Pandas, Seaborn"
      description="Conducted in-depth analysis of Heart Disease Dataset to predict disease likelihood based on symptoms. Implemented multiple ML models (KNN, Naive Bayes, Linear Regression, Decision Tree, Random Forest) achieving ~86% accuracy."
    />

    <ProjectCard 
      title="PART OF SPEECH TAGGER"
      tech="PyTorch, spaCy, Transformers, NLTK"
      description="Deep Learning Bi-LSTM model for POS tagging across multiple languages. Achieved over 91% accuracy."
    />
  </div>
);

const ExperiencePanel = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
      PROFESSIONAL EXPERIENCE
    </h3>
    
    <ExperienceCard 
      title="CData Software"
      role="Software Development Engineer – Level II"
      location="Bengaluru, India"
      period="Apr 2023 – Jul 2024"
      responsibilities={[
        "Developed and maintained front-end and back-end features for the CData Connect Cloud Platform.",
        "Optimized the Async Query Processing feature that enhanced query execution performance and decreased query response time by almost half.",
        "Architected and coded the API Connector that streamlined integration with external APIs and minimized manual IT intervention by 35%. This solution also minimized costs and effort required to create drivers for new data sources.",
        "Revamped Dataset feature to improve data organization that allows users to easily manage datasets and improves data handling.",
        "Utilized xUnit and NUnit for unit and integration testing that increased the code coverage by 35% and cut down production bugs by approx. 20%."
      ]}
      tech="C#, dotnet, Java, Spring Boot, ReactJS, Typescript, NodeJS, Postgres, DynamoDB, Terraform, xUnit, NUnit, Azure"
    />
    
    <ExperienceCard 
      title="CData Software"
      role="Software Development Engineer – Level I"
      location="Bengaluru, India"
      period="Apr 2022 - Mar 2023"
      responsibilities={[
        "Led the project of developing a Python connector for the CData Connect Cloud platform, adhering to PEP 249 – Python Database API Specification.",
        "Programmed these cursor methods: execute, executemany, fetchone, fetchmany, fetchall, nextset; that allows interaction with the Connect Cloud."
      ]}
      tech="Python, R, Shell, MySQL, Postgres, Pytest"
    />
    
    <ExperienceCard 
      title="Kameda Infologics"
      role="Software Engineer Intern"
      location="Trivandrum, India"
      period="Aug 2021 - Mar 2022"
      responsibilities={[
        "Contributed as a front-end developer on the YASASII project, a healthcare portal. Established admin connectivity and patient records pages.",
        "Verified the end-to-end working of the portal and added over 72 unit and integration tests for the portal to ensure the reliability."
      ]}
      tech="ReactJS, NodeJS, JavaScript, HTML, CSS, Redis, MongoDB, Jest"
    />
  </div>
);

const ExperienceCard = ({ title, role, location, period, responsibilities, tech }) => (
  <div style={{
    border: '2px solid rgba(0, 217, 255, 0.5)',
    background: 'rgba(5, 8, 18, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    transition: 'all 0.3s',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#00ffff';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
    e.currentTarget.style.boxShadow = 'none';
  }}>
    <div style={{ marginBottom: '12px' }}>
      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#00ffff', margin: '0 0 5px 0' }}>{title}</h4>
      <div style={{ fontSize: '14px', color: '#7dd3fc', marginBottom: '3px' }}>{role}</div>
      <div style={{ fontSize: '12px', color: '#7dd3fc', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <span>{location}</span>
        <span style={{ color: '#00ff88' }}>{period}</span>
      </div>
    </div>
    
    <ul style={{ margin: '15px 0', paddingLeft: '20px', color: '#c9e9f6', fontSize: '12px', lineHeight: '1.8' }}>
      {responsibilities.map((resp, idx) => (
        <li key={idx} style={{ marginBottom: '8px' }}>{resp}</li>
      ))}
    </ul>
    
    <div style={{ 
      fontSize: '11px', 
      color: '#ff9900', 
      fontWeight: 'bold', 
      marginTop: '12px',
      paddingTop: '12px',
      borderTop: '1px solid rgba(0, 217, 255, 0.2)'
    }}>
      Technologies: {tech}
    </div>
  </div>
);

const ProjectCard = ({ title, tech, description }) => (
  <div style={{
    border: '2px solid rgba(0, 217, 255, 0.5)',
    background: 'rgba(5, 8, 18, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
    transition: 'all 0.3s',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#00ffff';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
    e.currentTarget.querySelector('h4').style.color = '#00ff88';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.querySelector('h4').style.color = '#00ffff';
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
      <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00ffff', margin: 0, transition: 'color 0.3s' }}>{title}</h4>
      <Code size={16} color="#7dd3fc" />
    </div>
    <div style={{ fontSize: '11px', color: '#ff9900', fontWeight: 'bold', marginBottom: '8px' }}>{tech}</div>
    <p style={{ fontSize: '12px', color: '#c9e9f6', lineHeight: '1.6', margin: 0 }}>{description}</p>
  </div>
);

const SkillsPanel = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00ffff', marginBottom: '20px', fontFamily: "'Orbitron', monospace" }}>
      TECHNOLOGY STACK
    </h3>
    
    <SkillCategory 
      title="PROGRAMMING LANGUAGES"
      skills={['Python', 'C++', 'Java', 'C#', 'JavaScript', 'TypeScript', 'R']}
    />
    
    <SkillCategory 
      title="AI/ML FRAMEWORKS & LIBRARIES"
      skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'Hugging Face', 'spaCy', 'NLTK', 'XGBoost', 'LightGBM']}
    />
    
    <SkillCategory 
      title="WEB & CLOUD TECHNOLOGIES"
      skills={['ReactJS', 'NodeJS', 'Spring Boot', 'FastAPI', 'AWS', 'Docker', 'Terraform', 'Azure']}
    />
    
    <SkillCategory 
      title="DATABASES"
      skills={['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Neo4j', 'SQL Server']}
    />
    
    <SkillCategory 
      title="AI/ML TOOLS & PLATFORMS"
      skills={['GPT-3', 'OpenAI API', 'Stable-Baselines3', 'SageMaker', 'TensorBoard', 'BERT', 'LSTM', 'Prophet']}
    />
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div style={{ marginBottom: '25px' }}>
    <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#7dd3fc', marginBottom: '12px' }}>{title}</h4>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {skills.map(skill => (
        <span 
          key={skill}
          style={{
            padding: '8px 12px',
            background: '#0a0e27',
            border: '2px solid rgba(0, 217, 255, 0.5)',
            borderRadius: '6px',
            fontSize: '12px',
            color: '#e0f7ff',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#00ffff';
            e.target.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.6)';
            e.target.style.color = '#00ffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
            e.target.style.boxShadow = 'none';
            e.target.style.color = '#e0f7ff';
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const MetricCard = ({ label, value, sublabel }) => (
  <div style={{
    background: '#050812',
    border: '2px solid rgba(0, 217, 255, 0.5)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'all 0.3s',
    cursor: 'default'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = '#00ffff';
    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
    e.currentTarget.style.boxShadow = 'none';
  }}>
    <div style={{ fontSize: '12px', color: '#7dd3fc', marginBottom: '5px' }}>{label}</div>
    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00ffff', marginBottom: '5px' }}>{value}</div>
    <div style={{ fontSize: '12px', color: '#00ff88' }}>{sublabel}</div>
  </div>
);

const RadarDisplay = () => {
  const [radarAngle, setRadarAngle] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRadarAngle(prev => (prev + 1.5) % 360); // Smooth rotation
    }, 25); // ~40fps for smoother animation
    return () => clearInterval(interval);
  }, []);
  
  const dots = [
    { cx: 140, cy: 70, label: 'Machine Learning', color: '#00ff88' },
    { cx: 75, cy: 55, label: 'Artificial Intelligence', color: '#00bfff' },
    { cx: 120, cy: 130, label: 'Deep Learning', color: '#00d9ff' },
    { cx: 60, cy: 120, label: 'Data Science', color: '#ff9900' },
    { cx: 155, cy: 100, label: 'Software Development', color: '#FFB6C1' },
    { cx: 85, cy: 145, label: 'NLP', color: '#9d4edd' }
  ];
  
  // Calculate angle from center (100, 100) to dot
  const getDotAngle = (cx, cy) => {
    // Calculate angle in degrees, 0° pointing up (12 o'clock position)
    let angle = Math.atan2(cx - 100, -(cy - 100)) * (180 / Math.PI);
    // Normalize to 0-360 range
    angle = (angle + 360) % 360;
    return angle;
  };
  
  const isNearAngle = (dotAngle, radarAngle) => {
    // Calculate the shortest angular distance
    let diff = Math.abs(dotAngle - radarAngle);
    if (diff > 180) diff = 360 - diff;
    return diff < 15; // Within 15 degrees
  };
  
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
      <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
        {/* Radar circles */}
        {[0, 1, 2, 3, 4].map(i => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={20 + i * 20}
            fill="none"
            stroke="rgba(0, 217, 255, 0.4)"
            strokeWidth="1.5"
          />
        ))}
        {/* Crosshairs */}
        <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
        <line x1="30" y1="30" x2="170" y2="170" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
        <line x1="170" y1="30" x2="30" y2="170" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="1.5" />
        
        {/* Dots with labels */}
        {dots.map((dot, idx) => {
          const dotAngle = getDotAngle(dot.cx, dot.cy);
          const isHighlighted = isNearAngle(dotAngle, radarAngle);
          
          return (
            <g key={idx}>
              <circle 
                cx={dot.cx} 
                cy={dot.cy} 
                r={isHighlighted ? "8" : "5"} 
                fill={dot.color}
                style={{
                  filter: isHighlighted ? `drop-shadow(0 0 8px ${dot.color})` : 'none',
                  transition: 'all 0.15s ease-out'
                }}
              />
              {isHighlighted && (
                <text
                  x={dot.cx}
                  y={dot.cy - 15}
                  textAnchor="middle"
                  fill={dot.color}
                  fontSize="8"
                  fontWeight="bold"
                  fontFamily="monospace"
                  style={{
                    filter: `drop-shadow(0 0 4px ${dot.color})`,
                    pointerEvents: 'none'
                  }}
                >
                  {dot.label}
                </text>
              )}
            </g>
          );
        })}
        
        {/* Rotating radar line */}
        <line 
          x1="100" 
          y1="100" 
          x2="100" 
          y2="20" 
          stroke="rgba(0, 255, 255, 0.9)" 
          strokeWidth="3"
          style={{
            transformOrigin: '100px 100px',
            transform: `rotate(${radarAngle}deg)`,
            filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.8))'
          }}
        />
      </svg>
    </div>
  );
};

const Timeline = () => {
  const events = [
    { startYear: '2018', endYear: '2022', label: 'B.Tech Computer Science', status: 'complete', color: '#00ff88' },
    { startYear: '2021', endYear: '2022', label: 'Kameda Infologics - Software Engineer Intern', status: 'complete', color: '#00ff88' },
    { startYear: '2022', endYear: '2023', label: 'CData Software - Software Engineer I', status: 'complete', color: '#00ff88' },
    { startYear: '2023', endYear: '2024', label: 'CData Software - Software Engineer II', status: 'complete', color: '#00ff88' },
    { startYear: '2024', endYear: '2026', label: 'Masters in AI - UMich Dearborn', status: 'active', color: '#00d9ff' },
    { startYear: '2025', endYear: 'Present', label: 'DSMRL Research Assistant', status: 'active', color: '#00d9ff' },
    { startYear: '2026', endYear: 'Future', label: 'PhD Program Target', status: 'pending', color: '#7dd3fc' }
  ];

  return (
    <div>
      {events.map((event, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '11px', color: '#e0f7ff', fontWeight: 'bold', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {event.label}
          </div>
          
          <div style={{ position: 'relative', marginBottom: '8px' }}>
            <div style={{ 
              height: '6px', 
              background: 'rgba(10, 14, 39, 0.8)', 
              borderRadius: '10px',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{ 
                width: event.status === 'pending' ? '0%' : event.status === 'active' ? '60%' : '100%',
                height: '100%',
                background: `linear-gradient(90deg, ${event.color}, ${event.color}dd)`,
                boxShadow: `0 0 10px ${event.color}`,
                transition: 'width 1s ease-out',
                animation: event.status === 'active' ? 'pulse 2s infinite' : 'none'
              }} />
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '10px', 
              color: '#7dd3fc',
              marginTop: '4px'
            }}>
              <span>{event.startYear}</span>
              <span style={{ color: event.status === 'active' ? '#00ffff' : '#7dd3fc' }}>{event.endYear}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionControlPortfolio;