
// Roadmap data
const roadmapData = {
    phases: [
        {
            title: "Foundation Building",
            description: "Build strong fundamentals in React, JavaScript, and basic AI concepts",
            days: 14,
            milestones: ["React Mastery", "AI Basics", "Interview Prep"]
        },
        {
            title: "Backend Development",
            description: "Learn Node.js, Express, databases, and authentication",
            days: 14,
            milestones: ["Node.js APIs", "Database Design", "Authentication"]
        },
        {
            title: "AI/ML Integration",
            description: "Master LangChain, vector databases, and ML concepts",
            days: 16,
            milestones: ["LangChain Mastery", "Vector DB", "ML Models"]
        },
        {
            title: "Project & Job Prep",
            description: "Build portfolio projects and prepare for interviews",
            days: 16,
            milestones: ["Portfolio Projects", "Interview Skills", "Job Applications"]
        }
    ],
    days: [
        // Week 1
        { date: "2025-07-03", fullstack: "HTML/CSS Advanced + Responsive Design", ai: "AI/ML/LLM Overview & Differences", interview: "System Design Basics", project: "Setup development environment" },
        { date: "2025-07-04", fullstack: "JavaScript ES6+ Features", ai: "Supervised vs Unsupervised Learning", interview: "HTTP/HTTPS Deep Dive", project: "Create GitHub profile" },
        { date: "2025-07-05", fullstack: "React Components & JSX", ai: "LLM Types (GPT, Gemini, Claude)", interview: "REST API Principles", project: "Build first React app" },
        { date: "2025-07-06", fullstack: "React State & Props", ai: "Prompting Techniques", interview: "HTTP Methods & Status Codes", project: "Add state management" },
        { date: "2025-07-07", fullstack: "React Hooks (useState, useEffect)", ai: "Tokens, Temperature, Parameters", interview: "JWT Authentication", project: "Implement user interactions" },
        { date: "2025-07-08", fullstack: "React Router & Navigation", ai: "Prompt Engineering Best Practices", interview: "MVC Architecture", project: "Add routing to app" },
        { date: "2025-07-09", fullstack: "Form Handling & Validation", ai: "Practice Day - Create Prompts", interview: "Mock Interview Prep", project: "Build contact form" },

        // Week 2
        { date: "2025-07-10", fullstack: "React Context API", ai: "Gemini API Setup", interview: "Database Basics", project: "Add global state" },
        { date: "2025-07-11", fullstack: "Custom Hooks", ai: "First API Call to Gemini", interview: "SQL Fundamentals", project: "Create custom hooks" },
        { date: "2025-07-12", fullstack: "React Performance (useMemo, useCallback)", ai: "API Error Handling", interview: "Database Relationships", project: "Optimize app performance" },
        { date: "2025-07-13", fullstack: "Styling with Tailwind CSS", ai: "Prompt Templates", interview: "Authentication vs Authorization", project: "Style your application" },
        { date: "2025-07-14", fullstack: "React Testing Basics", ai: "LangChain Introduction", interview: "CORS & Security", project: "Write basic tests" },
        { date: "2025-07-15", fullstack: "Project: Todo App with Context", ai: "Memory in Chat Applications", interview: "Git & Version Control", project: "Complete todo app" },
        { date: "2025-07-16", fullstack: "Code Review & Refactoring", ai: "Chaining LLM Calls", interview: "Practice Interview Questions", project: "Refactor and document code" },

        // Week 3-4: Backend
        { date: "2025-07-17", fullstack: "Node.js Fundamentals", ai: "Machine Learning Basics", interview: "Algorithms & Data Structures", project: "Setup backend project" },
        { date: "2025-07-18", fullstack: "Express.js Setup", ai: "Scikit-learn Introduction", interview: "Time Complexity", project: "Create first API endpoint" },
        { date: "2025-07-19", fullstack: "Middleware & Routing", ai: "Linear Regression", interview: "Space Complexity", project: "Add middleware" },
        { date: "2025-07-20", fullstack: "Database Connection (MongoDB)", ai: "Train/Test Split", interview: "Sorting Algorithms", project: "Connect to database" },
        { date: "2025-07-21", fullstack: "CRUD Operations", ai: "Classification Models", interview: "Searching Algorithms", project: "Build CRUD APIs" },
        { date: "2025-07-22", fullstack: "User Authentication", ai: "Model Evaluation", interview: "Dynamic Programming", project: "Add authentication" },
        { date: "2025-07-23", fullstack: "JWT Implementation", ai: "Overfitting & Cross Validation", interview: "System Design - Chat App", project: "Implement JWT" },
        { date: "2025-07-24", fullstack: "File Upload & Handling", ai: "Logistic Regression", interview: "Databases - Indexing", project: "Add file upload" },
        { date: "2025-07-25", fullstack: "API Testing with Postman", ai: "KNN Classifier", interview: "Database Optimization", project: "Test all APIs" },
        { date: "2025-07-26", fullstack: "Error Handling & Logging", ai: "ML Project: Iris Classification", interview: "Caching Strategies", project: "Add error handling" },
        { date: "2025-07-27", fullstack: "Deployment to Render/Heroku", ai: "Model Deployment", interview: "Load Balancing", project: "Deploy backend" },
        { date: "2025-07-28", fullstack: "Connect Frontend to Backend", ai: "ML Pipeline", interview: "Microservices Basics", project: "Full-stack integration" },
        { date: "2025-07-29", fullstack: "Project: Blog Platform", ai: "ML Project Demo", interview: "API Rate Limiting", project: "Build blog platform" },
        { date: "2025-07-30", fullstack: "Code Review & Testing", ai: "ML Best Practices", interview: "Security Best Practices", project: "Test and document" },

        // Week 5-6: AI/ML
        { date: "2025-07-31", fullstack: "GraphQL Basics", ai: "LangChain Deep Dive", interview: "React Performance", project: "Explore GraphQL" },
        { date: "2025-08-01", fullstack: "WebSocket Integration", ai: "Document Loaders", interview: "State Management", project: "Add real-time features" },
        { date: "2025-08-02", fullstack: "Progressive Web App", ai: "Text Embeddings", interview: "Component Design", project: "Make PWA" },
        { date: "2025-08-03", fullstack: "Docker Basics", ai: "Vector Databases (Chroma)", interview: "Testing Strategies", project: "Containerize app" },
        { date: "2025-08-04", fullstack: "CI/CD Pipeline", ai: "Similarity Search", interview: "DevOps Basics", project: "Setup CI/CD" },
        { date: "2025-08-05", fullstack: "Monitoring & Analytics", ai: "RAG (Retrieval Augmented Generation)", interview: "Monitoring & Logging", project: "Add analytics" },
        { date: "2025-08-06", fullstack: "Performance Optimization", ai: "Building RAG System", interview: "Performance Metrics", project: "Optimize performance" },
        { date: "2025-08-07", fullstack: "TypeScript Integration", ai: "Chat Memory Implementation", interview: "TypeScript Benefits", project: "Add TypeScript" },
        { date: "2025-08-08", fullstack: "Advanced React Patterns", ai: "LangChain Agents", interview: "Design Patterns", project: "Implement patterns" },
        { date: "2025-08-09", fullstack: "Micro-frontend Architecture", ai: "Tool Integration", interview: "Architecture Decisions", project: "Explore micro-frontends" },
        { date: "2025-08-10", fullstack: "State Management (Redux/Zustand)", ai: "Custom Tools for Agents", interview: "State Management Patterns", project: "Add advanced state management" },
        { date: "2025-08-11", fullstack: "Server-Side Rendering", ai: "Multi-modal AI", interview: "SSR vs CSR", project: "Implement SSR" },
        { date: "2025-08-12", fullstack: "Project: E-commerce Platform", ai: "Voice Integration", interview: "System Design - E-commerce", project: "Build e-commerce app" },
        { date: "2025-08-13", fullstack: "Payment Integration", ai: "Computer Vision Basics", interview: "Payment Systems", project: "Add payment gateway" },
        { date: "2025-08-14", fullstack: "Admin Dashboard", ai: "Image Recognition", interview: "Dashboard Design", project: "Create admin panel" },
        { date: "2025-08-15", fullstack: "Final Project Planning", ai: "AI Project Planning", interview: "Project Management", project: "Plan final project" },

        // Week 7-8: Projects & Job Prep
        { date: "2025-08-16", fullstack: "Project: AI-Powered Chat App", ai: "Build Smart Chatbot", interview: "Behavioral Questions", project: "Start AI chat app" },
        { date: "2025-08-17", fullstack: "Real-time Features", ai: "Conversation Memory", interview: "STAR Method", project: "Add real-time chat" },
        { date: "2025-08-18", fullstack: "UI/UX Improvements", ai: "Context Management", interview: "Portfolio Review", project: "Improve UI/UX" },
        { date: "2025-08-19", fullstack: "Mobile Responsiveness", ai: "Multi-turn Conversations", interview: "Resume Optimization", project: "Make mobile responsive" },
        { date: "2025-08-20", fullstack: "Testing & Debugging", ai: "Error Handling in AI", interview: "LinkedIn Profile", project: "Test thoroughly" },
        { date: "2025-08-21", fullstack: "Performance Monitoring", ai: "AI Ethics & Bias", interview: "Networking Strategies", project: "Add monitoring" },
        { date: "2025-08-22", fullstack: "Security Implementation", ai: "Production AI Deployment", interview: "Mock Interview 1", project: "Implement security" },
        { date: "2025-08-23", fullstack: "Documentation & README", ai: "AI Model Versioning", interview: "Mock Interview 2", project: "Write documentation" },
        { date: "2025-08-24", fullstack: "Code Quality & Linting", ai: "AI Monitoring & Logging", interview: "Technical Interview Prep", project: "Code quality check" },
        { date: "2025-08-25", fullstack: "Portfolio Website", ai: "AI Project Showcase", interview: "Portfolio Presentation", project: "Build portfolio site" },
        { date: "2025-08-26", fullstack: "SEO & Analytics", ai: "AI Case Studies", interview: "Company Research", project: "Optimize for SEO" },
        { date: "2025-08-27", fullstack: "Final Deployment", ai: "AI Trends & Future", interview: "Job Application Strategy", project: "Deploy all projects" },
        { date: "2025-08-28", fullstack: "Project Demo Prep", ai: "AI Interview Questions", interview: "Salary Negotiation", project: "Prepare demos" },
        { date: "2025-08-29", fullstack: "Code Review & Cleanup", ai: "AI Ethics Interview Prep", interview: "Follow-up Strategies", project: "Final code review" },
        { date: "2025-08-30", fullstack: "Final Presentation", ai: "AI Portfolio Review", interview: "Job Interview Practice", project: "Present projects" },
        { date: "2025-08-31", fullstack: "Job Applications", ai: "AI Job Market Analysis", interview: "Application Submission", project: "Start applying" }
    ]
};

let currentWeek = 1;
let completedDays = JSON.parse(localStorage.getItem('completedDays') || '{}');
let dailyNotes = JSON.parse(localStorage.getItem('dailyNotes') || '{}');
let confidenceLevels = JSON.parse(localStorage.getItem('confidenceLevels') || '{}');

function showWeek(weekNum) {
    currentWeek = weekNum;
    document.querySelectorAll('.week-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.week-btn')[weekNum - 1].classList.add('active');

    updatePhaseOverview();
    renderDays();
}

function updatePhaseOverview() {
    const phase = roadmapData.phases[currentWeek - 1];
    document.getElementById('phaseOverview').innerHTML = `
                <div class="phase-title">${phase.title}</div>
                <div class="phase-description">${phase.description}</div>
                <div class="milestones">
                    ${phase.milestones.map(milestone => `
                        <div class="milestone">
                            <h4>${milestone}</h4>
                        </div>
                    `).join('')}
                </div>
            `;
}

function renderDays() {
    const startIdx = (currentWeek - 1) * 15;
    const endIdx = Math.min(startIdx + 15, roadmapData.days.length);
    const daysToShow = roadmapData.days.slice(startIdx, endIdx);

    document.getElementById('roadmapGrid').innerHTML = daysToShow.map((day, idx) => {
        const globalIdx = startIdx + idx;
        const isCompleted = completedDays[globalIdx];
        const confidence = confidenceLevels[globalIdx] || 3;
        const notes = dailyNotes[globalIdx] || '';

        return `
                    <div class="day-card ${isCompleted ? 'completed' : ''}">
                        <div class="day-header">
                            <div class="day-title">Day ${globalIdx + 1}</div>
                            <div class="day-date">${day.date}</div>
                        </div>
                        <div class="topics">
                            <div class="topic fullstack">
                                <strong>Full Stack:</strong> ${day.fullstack}
                            </div>
                            <div class="topic ai">
                                <strong>AI/ML:</strong> ${day.ai}
                            </div>
                            <div class="topic interview">
                                <strong>Interview:</strong> ${day.interview}
                            </div>
                            <div class="topic project">
                                <strong>Project:</strong> ${day.project}
                            </div>
                        </div>
                        <div class="confidence-slider">
                            <span>Confidence:</span>
                            <input type="range" min="1" max="5" value="${confidence}" 
                                   class="slider" onchange="updateConfidence(${globalIdx}, this.value)">
                            <span>${confidence}/5</span>
                        </div>
                        <div class="notes-section">
                            <textarea class="notes-input" placeholder="What did you learn today?"
                                      onchange="updateNotes(${globalIdx}, this.value)">${notes}</textarea>
                        </div>
                        <button class="btn ${isCompleted ? 'secondary' : ''}" 
                                onclick="toggleComplete(${globalIdx})">
                            ${isCompleted ? '✓ Completed' : 'Mark Complete'}
                        </button>
                    </div>
                `;
    }).join('');
}

function toggleComplete(dayIndex) {
    completedDays[dayIndex] = !completedDays[dayIndex];
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
    updateStats();
    renderDays();
}

function updateConfidence(dayIndex, value) {
    confidenceLevels[dayIndex] = parseInt(value);
    localStorage.setItem('confidenceLevels', JSON.stringify(confidenceLevels));
    updateStats();
}

function updateNotes(dayIndex, value) {
    dailyNotes[dayIndex] = value;
    localStorage.setItem('dailyNotes', JSON.stringify(dailyNotes));
}

function updateStats() {
    const totalDays = Object.keys(completedDays).length;
    const completed = Object.values(completedDays).filter(Boolean).length;
    const avgConf = Object.values(confidenceLevels).reduce((a, b) => a + b, 0) / Math.max(Object.values(confidenceLevels).length, 1);

    document.getElementById('daysCompleted').textContent = completed;
    document.getElementById('avgConfidence').textContent = avgConf.toFixed(1);
    document.getElementById('projectsBuilt').textContent = Math.floor(completed / 7);
    document.getElementById('skillsLearned').textContent = Math.floor(completed / 2);

    const progress = (completed / 60) * 100;
    document.getElementById('overallProgress').style.width = progress + '%';
}

function exportToExcel() {
    const data = roadmapData.days.map((day, idx) => ({
        'Day': idx + 1,
        'Date': day.date,
        'Full Stack Topic': day.fullstack,
        'AI/ML Topic': day.ai,
        'Interview Topic': day.interview,
        'Project Task': day.project,
        'Completed': completedDays[idx] ? 'Yes' : 'No',
        'Confidence Level': confidenceLevels[idx] || 3,
        'Notes': dailyNotes[idx] || ''
    }));

    // Create CSV content
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => Object.values(row).map(value => `"${value}"`).join(','));
    const csvContent = [headers, ...rows].join('\n');

    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '60-day-roadmap-progress.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        localStorage.removeItem('completedDays');
        localStorage.removeItem('dailyNotes');
        localStorage.removeItem('confidenceLevels');
        completedDays = {};
        dailyNotes = {};
        confidenceLevels = {};
        updateStats();
        renderDays();
    }
}

function showTips() {
    alert(`📚 Study Tips for Success:

1. 🎯 Focus on one topic at a time - don't multitask
2. 🔄 Practice coding daily - consistency beats intensity
3. 📝 Document your learning - write notes and summaries
4. 🏗️ Build projects while learning - apply knowledge immediately
5. 🤝 Join communities - Discord, Reddit, Stack Overflow
6. 💡 Explain concepts to others - teaching helps retention
7. 🎮 Use spaced repetition - review previous topics regularly
8. 📊 Track progress - celebrate small wins
9. 🚀 Don't aim for perfection - aim for progress
10. 😴 Take breaks - rest is part of learning

Remember: The goal isn't to learn everything perfectly, but to build enough skill to get hired and continue learning on the job!`);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    updateStats();
    renderDays();
    updatePhaseOverview();
});
