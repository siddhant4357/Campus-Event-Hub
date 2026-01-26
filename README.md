# 🎓 CampusEventHub
### Inter-College Event Management Platform

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)](https://www.mongodb.com/)

---

## 📖 Abstract

CampusEventHub is a **full-stack web application** that digitalizes and streamlines inter-college event management. It serves as a centralized hub where colleges can host cultural fests, hackathons, workshops, and sports competitions, while students can explore, register, and participate seamlessly.

The platform ensures **secure authentication**, **role-based access control**, and intuitive interfaces for both event creation and browsing, fostering transparency and enhanced student engagement across institutions.

---

## 🎯 Key Features

- 🔐 **Secure Authentication** with JWT and role-based access control
- 👨‍🎓 **Student Dashboard** for event browsing and registration
- 👩‍💼 **College Admin Panel** for event and user management
- 👑 **Super Admin Dashboard** with system-wide control
- 📊 **Registration Management** with approval workflow
- 💳 **Secure Payment Integration** with Stripe for paid events
- 🎫 **QR-Based Ticket System** with automatic generation and email delivery
- 📈 **Real-time Analytics** with interactive charts
- ⭐ **Feedback & Rating System** with detailed comments and analytics
- 📋 **Excel Data Export** with comprehensive registration details and ticket information
- 🔍 **Advanced Filtering** and search capabilities
- 📱 **Responsive Design** across all devices
- 📋 **Activity Logging** for audit trails
- 📧 **Email Notifications** for approvals and password resets

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-F46519?style=for-the-badge&logo=files&logoColor=white)
![PDFKit](https://img.shields.io/badge/PDFKit-FF6B6B?style=for-the-badge&logo=pdf&logoColor=white)
![QRCode](https://img.shields.io/badge/QRCode-000000?style=for-the-badge&logo=qrcode&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=mail&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008C45?style=for-the-badge&logo=stripe&logoColor=white)
![XLSX](https://img.shields.io/badge/XLSX-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)

### Development Tools
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

---

## 🏗️ Architecture & Design

### System Architecture

![System Architecture](./docs/system-architecture.png)

*Overall system architecture showing the interaction between frontend, backend, and database components*

### Architecture Overview
- **Frontend**: React.js with responsive design and real-time event listing
- **Backend**: Node.js + Express.js with RESTful APIs
- **Database**: MongoDB for scalable data storage
- **Authentication**: JWT-based secure authentication with role-based access
- **Payments**: Stripe integration for secure payment processing
- **Deployment**: Cloud-ready with environment-based configuration

### Use Case Diagram

![Use Case Diagram](./docs/usecase-diagram.png)

*Use case diagram illustrating the interactions between different user roles and system functionalities*

### Sequence Diagram

![Sequence Diagram](./docs/sequence-diagram.png)

*Sequence diagram showing the flow of operations for key user interactions and system processes*

---

## 📊 Database Schema

### Core Models

#### 👤 Users
```javascript
{
  name: String,
  email: String (validated),
  password: String (hashed with bcrypt),
  college: String,
  role: ['student', 'college_admin', 'super_admin'],
  approval_status: ['pending', 'approved', 'rejected'],
  isActive: Boolean,
  createdAt: Date
}
```

#### 🎪 Events
```javascript
{
  title: String,
  description: String,
  category: ['Technical', 'Cultural', 'Sports', 'Workshop', 'Hackathon'],
  location: String,
  college_name: String,
  start_date: Date,
  end_date: Date,
  registration_limit: Number,
  current_registrations: Number,
  price: Number, // Registration fee (0 for free events)
  created_by: ObjectId,
  image: String,
  status: ['upcoming', 'active', 'completed']
}
```

#### 📝 Registrations
```javascript
{
  event_id: ObjectId,
  user_id: ObjectId,
  status: ['pending', 'approved', 'rejected'],
  timestamp: Date,
  stripe_payment_id: String, // For paid events
  payment_status: ['paid', 'pending', 'failed']
}
```

#### 📋 Activity Logs
```javascript
{
  user_id: ObjectId,
  action: String,
  description: String,
  details: Object,
  timestamp: Date
}
```
