"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Waves,
  Sun,
  Wind,
  Atom,
  Bone,
  HeartPulse,
  BrainCircuit,
  ShieldCheck,
  Dumbbell,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Users,
  Activity,
  Heart,
  Baby,
  Stethoscope,
  Home,
  Video,
  UserCheck,
  Play,
  Pause,
  Clock,
} from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";
import React, { useState, useRef, useEffect, useCallback } from "react";
import CTA from "@/components/CTA";
import Head from "next/head";
import { getCalApi } from "@calcom/embed-react";

// --- DATA ---

const coreServicesData = [
  {
    id: 1,
    title: "Musculoskeletal Rehabilitation",
    icon: Bone,
    borderColor: "border-[#004F8C]",
    iconColor: "text-[#004F8C]",
    accentColor: "bg-[#004F8C]",
    description:
      "Tailored rehab for joint injuries, chronic pain, and muscle strains. We aim to reduce pain and restore function using techniques like manual therapy and targeted exercise.",
    conditions: [
      "Joint injuries",
      "Chronic pain",
      "Muscle strains",
      "Arthritis",
      "Back pain",
    ],
    image: "🦴",
  },
  {
    id: 2,
    title: "Sports Physiotherapy",
    icon: Dumbbell,
    borderColor: "border-[#008094]",
    iconColor: "text-[#008094]",
    accentColor: "bg-[#008094]",
    description:
      "Injury prevention, strength training, and fast-track rehab for athletes. We help you return to your sport stronger and more resilient than before.",
    conditions: [
      "Sports injuries",
      "Performance enhancement",
      "Injury prevention",
      "Return to sport",
      "Athletic conditioning",
    ],
    image: "🏃‍♂️",
  },
  {
    id: 3,
    title: "Post-Operative Rehab",
    icon: HeartPulse,
    borderColor: "border-[#EC691F]",
    iconColor: "text-[#EC691F]",
    accentColor: "bg-[#EC691F]",
    description:
      "Optimal recovery programs after surgeries like joint replacements or ACL repair, guided by your surgeon's protocols and our expertise.",
    conditions: [
      "Joint replacement recovery",
      "ACL repair",
      "Post-surgical rehabilitation",
      "Wound healing",
      "Mobility restoration",
    ],
    image: "🏥",
  },
  {
    id: 4,
    title: "Neurological Rehabilitation",
    icon: BrainCircuit,
    borderColor: "border-[#004F8C]",
    iconColor: "text-[#004F8C]",
    accentColor: "bg-[#004F8C]",
    description:
      "Dedicated care for stroke, Parkinson's, MS, and brain injuries to improve motor control, balance, and independence.",
    conditions: [
      "Stroke recovery",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Brain injuries",
      "Spinal cord injuries",
    ],
    image: "🧠",
  },
  {
    id: 5,
    title: "Cardio-Respiratory Physio",
    icon: Heart,
    borderColor: "border-[#008094]",
    iconColor: "text-[#008094]",
    accentColor: "bg-[#008094]",
    description:
      "Rehabilitation for conditions like COPD and post-heart-attack recovery to boost endurance and improve breathing efficiency.",
    conditions: [
      "COPD",
      "Post-heart attack",
      "Breathing difficulties",
      "Chest conditions",
      "Cardiac rehabilitation",
    ],
    image: "❤️",
  },
  {
    id: 6,
    title: "Women's Health Physio",
    icon: Baby,
    borderColor: "border-[#EC691F]",
    iconColor: "text-[#EC691F]",
    accentColor: "bg-[#EC691F]",
    description:
      "Specialized care including pelvic floor rehab (incontinence, prolapse) with our UI Chair, pre/post-natal recovery, and osteoporosis management.",
    conditions: [
      "Pelvic floor dysfunction",
      "Pregnancy-related pain",
      "Post-natal recovery",
      "Incontinence",
      "Osteoporosis",
    ],
    image: "🤱",
  },
  {
    id: 7,
    title: "Geriatric Therapy",
    icon: Users,
    borderColor: "border-[#004F8C]",
    iconColor: "text-[#004F8C]",
    accentColor: "bg-[#004F8C]",
    description:
      "A focus on improving balance, mobility, and strength to prevent falls and maintain an active lifestyle in older adults.",
    conditions: [
      "Fall prevention",
      "Balance training",
      "Mobility issues",
      "Age-related conditions",
      "Strength maintenance",
    ],
    image: "👴",
  },
  {
    id: 8,
    title: "Intimate Health Rehab",
    icon: ShieldCheck,
    borderColor: "border-[#008094]",
    iconColor: "text-[#008094]",
    accentColor: "bg-[#008094]",
    description:
      "Discreet and effective therapy for urinary/faecal incontinence and sexual health, using advanced tools like the UI-Chair.",
    conditions: [
      "Urinary incontinence",
      "Faecal incontinence",
      "Sexual health",
      "Pelvic pain",
      "Intimate wellness",
    ],
    image: "🔒",
  },
  {
    id: 9,
    title: "Home & Tele-Rehabilitation",
    icon: Home,
    borderColor: "border-[#EC691F]",
    iconColor: "text-[#EC691F]",
    accentColor: "bg-[#EC691F]",
    description:
      "Access our expert care from the comfort of your home through secure video sessions and our Patient Portal for ongoing support.",
    conditions: [
      "Remote consultation",
      "Home exercises",
      "Follow-up care",
      "Accessibility needs",
      "Ongoing support",
    ],
    image: "🏠",
  },
];

const advancedTechniquesData = [
  {
    id: 10,
    title: "Shockwave Therapy",
    icon: Wind,
    borderColor: "border-blue-400",
    iconColor: "text-blue-600",
    description:
      "A non-invasive treatment that uses acoustic waves to treat chronic pain and promote the regeneration of damaged tissues.",
    techPage: "/technology#shockwave",
    anchorId: "shockwave-therapy", // Add this
  },
  {
    id: 11,
    title: "Spinal Decompression",
    icon: Bone,
    borderColor: "border-green-400",
    iconColor: "text-green-600",
    description:
      "Gentle, non-surgical therapy to relieve back and neck pain by reducing pressure on the spinal discs and nerves.",
    techPage: "/technology#spinal-decompression",
    anchorId: "spinal-decompression", // Add this
  },
  {
    id: 12,
    title: "Aeroleap Pro",
    icon: Activity,
    borderColor: "border-purple-400",
    iconColor: "text-purple-600",
    description:
      "State-of-the-art equipment for advanced rehabilitation and performance enhancement exercises.",
    techPage: "/technology#aeroleap-pro",
    anchorId: "ai-smart-gym", // Add this
  },
  {
    id: 13,
    title: "rPMS",
    icon: Atom,
    borderColor: "border-orange-400",
    iconColor: "text-orange-600",
    description:
      "Repetitive Peripheral Magnetic Stimulation (rPMS) is an advanced modality for pain management and muscle re-education.",
    techPage: "/technology#rpms",
    anchorId: "rpms", // Add this
  },
  {
    id: 14,
    title: "UI Chair",
    icon: UserCheck,
    borderColor: "border-pink-400",
    iconColor: "text-pink-600",
    description:
      "Specialized therapeutic chair designed for pelvic floor rehabilitation and strengthening.",
    techPage: "/technology#ui-chair",
    anchorId: "ui-chair", // Add this
  },
  {
    id: 15,
    title: "High-Intensity Laser",
    icon: Zap,
    borderColor: "border-red-400",
    iconColor: "text-red-600",
    description:
      "Advanced laser therapy to penetrate deep into tissue, accelerating cellular reproduction and growth for faster healing.",
    techPage: "/technology#high-intensity-laser",
    anchorId: "high-intensity-laser", // Add this
  },
];

// Detailed condition information
const conditionDetails = {
  "Joint injuries": {
    title: "Joint Injuries – Personalized Rehabilitation for Optimal Recovery",
    subtitle: "Expert Management of Joint Injuries at VitalPhysio⁺",
    description: `Joint injuries are among the most common musculoskeletal conditions, affecting the knee, shoulder, ankle, hip, wrist, and elbow. At VitalPhysio⁺, our advanced rehabilitation protocols support rapid, evidence-based recovery for acute and chronic injuries—including ligament sprains, cartilage tears (such as ACL/MCL injuries and meniscal tears), dislocations, and overuse syndromes.`,
    highlights: [
      {
        title: "Comprehensive Assessment",
        content:
          "Every patient receives a thorough biomechanical evaluation using the latest assessment tools—identifying structural and functional deficits for a truly personalized plan.",
      },
      {
        title: "Precision Treatment Protocols",
        content:
          "We combine manual therapy, targeted exercise prescription, and progressive loading to restore joint stability, mobility, and strength.",
      },
      {
        title: "Advanced Modalities",
        content:
          "Where indicated, we integrate regenerative medicine approaches, shockwave therapy, high-intensity laser, and rPMS (Repetitive Peripheral Magnetic Stimulation) for enhanced tissue healing and pain relief.",
      },
      {
        title: "Cutting-Edge Technology",
        content:
          "Our use of wearable sensors, AI-driven movement analysis, and state-of-the-art equipment ensures real-time progress tracking and highly individualized rehabilitation.",
      },
      {
        title: "Education & Self-Management",
        content:
          "Patients and caregivers receive guidance on activity modification, safe return-to-sport, bracing/support options, and injury prevention—promoting long-term joint health.",
      },
    ],
    treatmentAreas: [
      "Knee injuries: ACL/MCL sprain, meniscus tear, patellar instability, osteoarthritis",
      "Shoulder injuries: Rotator cuff tear, labral injury, dislocation, frozen shoulder",
      "Ankle injuries: Sprains, ligament tears, chronic instability",
      "Hip injuries: Labral tears, impingement syndromes, overuse injuries",
      "Wrist & elbow: Ligament injuries, overuse/tendon problems, instability",
    ],
    whyChooseUs: [
      "Flexible, criterion-based progression: Rehabilitation is guided by objective function, not just time, supporting safe and confident return to work, athletics, or daily life.",
      "Combined expertise: Our team uses global best practices—Aspetar, OPTIKNEE, and OARSI guidelines—while individualizing every program for your unique injury, lifestyle, and goals.",
    ],
    importanceNote:
      "Prompt, expert-guided rehab after joint injury dramatically reduces pain, restores function, and decreases long-term risk of arthritis or reinjury. Our physiotherapists collaborate with orthopedic surgeons as needed for seamless post-operative transitions.",
    ctaMessage:
      "Book a consultation and take the first step toward pain-free movement and lasting joint health.",
  },
  "Chronic pain": {
    title: "Chronic Pain – Personalized Relief, Restored Life",
    subtitle: "Advanced Chronic Pain Rehabilitation at VitalPhysio⁺",
    description: `Chronic pain is defined as persistent pain lasting longer than three months, often impacting the back, neck, joints, or muscles and affecting every aspect of daily life. At VitalPhysio⁺, our multidisciplinary team delivers evidence-based, patient-centered chronic pain solutions—transforming lives through holistic assessment, compassionate care, and advanced technology for lasting results.`,
    highlights: [
      {
        title: "Comprehensive Evaluation",
        content:
          "We use detailed pain assessment tools, functional movement analysis, and biopsychosocial profiling to create a deeply personalized plan—addressing physical, psychological, and lifestyle contributors to ongoing pain.",
      },
      {
        title: "Multimodal Treatment Approach",
        content:
          "Interventions include clinically proven manual therapy, therapeutic exercise, posture correction, and movement retraining, all shown to improve function and reduce pain severity.",
      },
      {
        title: "Mind-Body Therapies",
        content:
          "Our programs integrate mindfulness, stress management, and education in pacing and flare-up strategies—empowering patients to control pain and improve mood.",
      },
      {
        title: "Advanced Modalities",
        content:
          "When appropriate, we offer evidence-supported treatments such as high-intensity laser therapy, TENS, electromyography biofeedback, hydrotherapy, and movement-based reality experiences.",
      },
      {
        title: "Team-Based, Coordinated Care",
        content:
          "For complex or persistent pain, our physiotherapists coordinate closely with pain specialists, psychologists, and physicians for truly integrated rehabilitation, in line with global best practice guidelines.",
      },
    ],
    treatmentAreas: [
      "Chronic low back pain, neck pain, and pelvic pain",
      "Osteoarthritis, rheumatoid arthritis, and fibromyalgia",
      "Complex pain syndromes (CRPS, post-surgical pain)",
      "Recurrent migraines and tension headaches",
      "Persistent joint/muscle pain after injury",
    ],
    whyChooseUs: [
      "Goal-Oriented, Functional Progression: Every session is milestone-driven, focusing on restoring quality of life, mobility, and independence—not just reducing symptoms.",
      "Long-Term Self-Management: We empower every patient with self-care tools, home exercise routines, and relapse-prevention strategies for sustained improvement.",
      "Patient Education Hub: Easy-access resources on chronic pain science, debunking myths, and guiding patients to better understanding and advocacy.",
    ],
    importanceNote:
      "Timely, specialist-led physiotherapy for chronic pain has been proven to reduce disability, minimize medication dependence, and optimize patient outcomes. Evidence strongly supports non-pharmacological, active management as first-line chronic pain care—validated by WHO guidelines.",
    ctaMessage:
      "Take the next step—regain control, reduce pain, and restore your best life with VitalPhysio⁺. Book your chronic pain assessment today.",
  },
  "Muscle strains": {
    title: "Muscle Strains – Rapid, Evidence-Based Recovery for Active Living",
    subtitle: "Expert Muscle Strain Rehabilitation at VitalPhysio⁺",
    description: `Muscle strains—often known as "pulled muscles"—are injuries caused by overstretching or tearing of muscle fibers. These injuries are common in athletes, fitness enthusiasts, and anyone engaged in high-demand activities, but can also occur in daily life. The most frequently affected areas include the hamstrings, quadriceps, calf, back, and shoulder.`,
    highlights: [
      {
        title: "State-of-the-Art Diagnostic Assessment",
        content:
          "Every patient undergoes detailed examination with functional movement screening to precisely determine the location, severity, and grade of muscle strain—ensuring a customized rehabilitation plan for optimal outcomes.",
      },
      {
        title: "Comprehensive Treatment Approach",
        content:
          "Our protocols follow the latest scientific guidelines, combining acute care (RICE protocol), progressive stretching, strengthening exercises, hands-on therapy, and regenerative modalities when indicated.",
      },
      {
        title: "Functional Rehabilitation",
        content:
          "Return-to-activity is structured, with clear milestone-based progression, sport-specific retraining, and real-time movement feedback to ensure a safe and confident return to work, sports, or daily living.",
      },
      {
        title: "Education & Self-Management",
        content:
          "We empower you with practical strategies for safe stretching, warm-up/cool-down routines, nutrition, hydration, and overuse prevention—essential for maintaining muscle health.",
      },
      {
        title: "Advanced Recovery Modalities",
        content:
          "When indicated, advanced treatments such as platelet-rich plasma (PRP), high-intensity laser, and shockwave therapy for enhanced healing—backed by latest evidence.",
      },
    ],
    treatmentAreas: [
      "Hamstring strain, quadriceps/psoas strain, calf (gastrocnemius/soleus) strain",
      "Back muscle strains, oblique/abdominal strains",
      "Rotator cuff and shoulder muscle strains",
      "Sports-related muscle injuries",
      "Acute and chronic muscle strain rehabilitation",
    ],
    whyChooseUs: [
      "Personalized care by rehabilitation experts: Our specialists use global best-practice guidelines for both sports and non-sports populations.",
      "Accelerated recovery: Evidence-supported therapies for rapid healing, pain relief, and injury prevention.",
      "Local expertise, global standards: Patient-centered programs using Bangalore's most advanced physiotherapy technology and protocols.",
    ],
    importanceNote:
      "Early, expert-guided muscle strain rehabilitation significantly reduces recovery time, prevents chronic complications, and minimizes re-injury risk. Our evidence-based approach ensures optimal healing and safe return to activities.",
    ctaMessage:
      "Book your assessment—experience tailored care, faster recovery, and lasting results.",
  },
  Arthritis: {
    title:
      "Arthritis – Evidence-Based Physiotherapy for Relief, Mobility, and Independence",
    subtitle: "Comprehensive Arthritis Rehabilitation at VitalPhysio⁺",
    description: `Arthritis—encompassing osteoarthritis, rheumatoid arthritis, and related joint disorders—causes pain, swelling, and restricted mobility, affecting daily activities and quality of life. At VitalPhysio⁺, we deliver cutting-edge, multidisciplinary arthritis management using global guidelines, advanced technologies, and a deeply personalized approach for optimum results.`,
    highlights: [
      {
        title: "Specialized Assessment",
        content:
          "Every patient receives a full musculoskeletal, functional, and lifestyle evaluation—identifying the type, stage, and impact of arthritis to tailor the ideal, patient-specific program.",
      },
      {
        title: "Multimodal Physiotherapy",
        content:
          "We implement evidence-based interventions such as targeted therapeutic exercise, manual therapy & joint mobilization, aquatic therapy & Pilates, pain management modalities, bracing and orthotic support, and assistive device guidance.",
      },
      {
        title: "Integrated Team Approach",
        content:
          "Our physiotherapists collaborate with rheumatologists and orthopedic specialists, as needed, to deliver fully coordinated care.",
      },
      {
        title: "Education & Self-Management",
        content:
          "Patients learn joint protection, pacing, weight management strategies (including diet recommendations like the Mediterranean and anti-inflammatory diet), and energy conservation techniques—empowering sustainable, long-term self-care.",
      },
    ],
    treatmentAreas: [
      "Osteoarthritis (knee, hip, hand, spine)",
      "Rheumatoid arthritis and other inflammatory arthropathies",
      "Juvenile idiopathic arthritis",
      "Spondyloarthritis and psoriatic arthritis",
    ],
    whyChooseUs: [
      "Personalized, goal-oriented progress: Every step and milestone is tailored for your needs—whether resuming hobbies, increasing everyday activity, or reducing stiffness and pain.",
      "Global best-practice guidelines: Care based on American College of Rheumatology (ACR), OARSI, and Indian national recommendations.",
      "Comprehensive multimodal approach combining exercise therapy, manual techniques, and advanced pain management modalities.",
    ],
    importanceNote:
      "Evidence-based physiotherapy for arthritis has been proven to significantly reduce pain, improve joint mobility, and enhance quality of life. Early intervention with specialized care can slow disease progression and maintain independence for longer periods.",
    ctaMessage:
      "Take control of your arthritis with a holistic program proven to improve mobility, reduce pain, and enhance life quality. Book your evaluation at VitalPhysio⁺ today!",
  },
  "Back pain": {
    title:
      "Back Pain – Comprehensive Relief—Personalized, Non-Surgical Rehabilitation",
    subtitle: "Best-in-Class Back Pain Physiotherapy at VitalPhysio⁺",
    description: `Back pain—especially lower back pain—is a leading cause of disability worldwide, affecting people of all ages and lifestyles. At VitalPhysio⁺, we specialize in advanced, individualized treatment programs that go beyond symptom relief to address the true source of pain and restore lasting function.`,
    highlights: [
      {
        title: "Targeted Assessment",
        content:
          "Every case begins with a thorough clinical, functional, and postural evaluation—including assessment for disc issues, nerve involvement, and lifestyle factors. This ensures a precise, patient-centered diagnosis and the right treatment pathway.",
      },
      {
        title: "Evidence-Based Physiotherapy Techniques",
        content:
          "Our protocols are guided by global best practices, including therapeutic exercise, manual therapy, pain management modalities, and education and self-management—all individualized for acute, subacute, or chronic back pain.",
      },
      {
        title: "Active, Non-Surgical Recovery",
        content:
          "Most cases of spine and back pain do not require surgery. Our proven approach promotes movement, safe activity, and gradual return to daily life—reducing reliance on medication and delivering long-term results.",
      },
      {
        title: "Advanced Treatment Modalities",
        content:
          "We offer cutting-edge options such as TENS, high-intensity laser, shockwave therapy, and, where indicated, platelet-rich plasma (PRP) for persistent pain relief and enhanced healing.",
      },
      {
        title: "Comprehensive Self-Management Education",
        content:
          "Patients are empowered with ergonomics training, activity modification strategies, and back care education to maintain results and prevent recurrence.",
      },
    ],
    treatmentAreas: [
      "Acute and chronic low back pain",
      "Herniated disc, degenerative disc disease, sciatica",
      "Lumbar muscle strain, facet joint syndrome",
      "Postural pain, mechanical back pain, axial spondyloarthritis",
    ],
    whyChooseUs: [
      "Global best-practice adherence: Protocols based on current evidence and leading clinical guidelines.",
      "Personalized care with latest technology: Real-time movement feedback, wearable sensors, and digital exercise prescription.",
      "Goal-driven rehabilitation: Every patient follows a criterion-based progression for a safe, confident return to work, fitness, and everyday living.",
    ],
    importanceNote:
      "Evidence-based physiotherapy is the gold standard for back pain management, with proven efficacy in reducing pain, improving function, and preventing recurrence. Early intervention with specialist care significantly improves outcomes and reduces the likelihood of chronic pain development.",
    ctaMessage:
      "Book your back pain assessment for a return to pain-free movement, improved posture, and renewed quality of life.",
  },
  "Sports injuries": {
    title: "Sports Injuries – Rapid, Sport-Specific Recovery—Backed by Science",
    subtitle: "Elite Sports Injury Rehabilitation at VitalPhysio⁺",
    description: `Sports injuries can happen to athletes of all ages and skill levels—whether on the field, court, or in personal fitness. Common sports injuries include sprains, strains, ligament tears (such as ACL and ankle injuries), muscle pulls, tendon injuries (achilles, rotator cuff), dislocations, and stress fractures. At VitalPhysio⁺, our Sports Physiotherapy division provides cutting-edge diagnosis, evidence-based rehab, and performance-focused care to get you safely back in the game.`,
    highlights: [
      {
        title: "Immediate and Advanced Assessment",
        content:
          "Every athlete or active individual receives a thorough biomechanical, functional, and sport-specific evaluation—pinpointing not just the injury, but the underlying movement patterns and risk factors.",
      },
      {
        title: "Individualized, Activity-Specific Rehabilitation",
        content:
          "Treatment is tailored to your sport, position, and personal goals. Protocols include acute phase care, progressive strengthening and neuromuscular retraining, sport-specific agility training, manual therapy and advanced modalities, and injury prevention strategies.",
      },
      {
        title: "Return-to-Play Decision Making",
        content:
          "We use defined milestones, objective strength/function testing, and psychological readiness screening to ensure safe, confident return to full sport participation—with ongoing support and monitoring.",
      },
      {
        title: "Integrated, Interdisciplinary Sports Medicine Team",
        content:
          "Collaboration with orthopedic and sports medicine specialists, nutritionists, and strength/conditioning coaches ensures the highest standards in care and performance.",
      },
    ],
    treatmentAreas: [
      "Ligament tears (ACL, MCL, ankle sprain)",
      "Muscle strains and tears (hamstring, groin, calf)",
      "Tendinopathies (Achilles, patellar, rotator cuff)",
      "Dislocations, fractures, stress injuries, overuse syndromes",
      "Post-operative sports rehabilitation (arthroscopy, reconstruction)",
    ],
    whyChooseUs: [
      "Global standards, local expertise: Protocols based on latest international sports medicine guidelines.",
      "Athlete-centered care: Tailored, progressive programs for every sport—from football and cricket to running and racket sports.",
      "Performance and prevention: Not just healing—our aim is also improved movement quality and injury prevention for the future.",
    ],
    importanceNote:
      "Early, specialized sports injury rehabilitation significantly reduces recovery time, prevents chronic complications, and optimizes return to sport performance. Our evidence-based approach ensures athletes return stronger, faster, and with reduced reinjury risk.",
    ctaMessage:
      "Get back to top form—book your sports injury assessment at VitalPhysio⁺ and experience the gold standard in recovery.",
  },
  "Performance enhancement": {
    title: "Performance Enhancement – Unlock Your Full Athletic Potential",
    subtitle: "High-Performance Physiotherapy at VitalPhysio⁺",
    description: `Performance enhancement is not only for elite athletes—it's vital for anyone looking to boost strength, speed, agility, and reduce injury risk. At VitalPhysio⁺, our cutting-edge Performance Enhancement Program uses the latest sports science, assessment technology, and coaching to help you consistently achieve your personal best, on and off the field.`,
    highlights: [
      {
        title: "Comprehensive Athletic Assessment",
        content:
          "Biomechanical analysis, strength and power testing, movement screening, and sport-specific profiling identify your unique strengths and performance gaps. Custom data-driven plans ensure precision targeting for speed, explosiveness, stability, and endurance improvements.",
      },
      {
        title: "Individualized, Progressive Training Plans",
        content:
          "Strength, agility, flexibility, plyometric, and neuromuscular control programs are sport/goal-specific and continually adapted to your response and feedback. Evidence-based mobility/recovery techniques to optimize load, minimize fatigue, and build resilience.",
      },
      {
        title: "Advanced Technology Integration",
        content:
          "Wearable performance trackers, force plates, video motion analysis, and real-time biofeedback tools give actionable insights for rapid gains. Sport-specific movement retraining and correction of inefficient or injury-prone patterns for lasting results.",
      },
      {
        title: "Injury Risk Reduction & Longevity",
        content:
          "Personalized prehabilitation routines, dynamic warm-up/cool-down guidance, and ongoing technique optimization help future-proof your body. Education in nutrition, hydration, mental preparation, and sleep supports holistic performance.",
      },
      {
        title: "Elite Return-to-Play & Event Preparation",
        content:
          "Specialized peaking protocols for competitive athletes, including taper planning, mental skills training, and competition simulation. Return-to-play after injury is managed via milestone-based strength/power testing, reconditioning, and psychological readiness screens.",
      },
    ],
    treatmentAreas: [
      "Competitive athletes across all sports",
      "Recreational athletes and fitness enthusiasts",
      "Youth athletes—foundational movement and injury prevention",
      "Corporate wellness and active aging populations",
    ],
    whyChooseUs: [
      "Internationally benchmarked: Protocols and assessment tools align with global sports physiotherapy standards.",
      "Expert coaches and therapists: Allied health, S&C, and sports psych support for comprehensive results.",
      "Trackable progress: Real-time improvement metrics keep you motivated and on course for your goals.",
    ],
    importanceNote:
      "Performance enhancement through evidence-based sports physiotherapy significantly improves athletic performance, reduces injury risk, and extends athletic careers. Our comprehensive approach ensures sustainable improvements in strength, speed, agility, and overall athletic capacity.",
    ctaMessage:
      "Be proactive, not reactive—book your personalized injury prevention screening today. Protect your health, unlock better movement, and perform with confidence.",
  },
  "Return to sport": {
    title:
      "Return to Sport – Safe, Science-Led Pathways—From Recovery to Peak Performance",
    subtitle: "Expert Return-to-Sport Rehabilitation at VitalPhysio⁺",
    description: `Returning to sport after injury or surgery is both a physical and psychological challenge. At VitalPhysio⁺, our Return to Sport Program follows global best practice frameworks, advanced testing, and individualized planning to minimize reinjury risk and optimize performance—ensuring you return not just healed, but stronger and better prepared than before.`,
    highlights: [
      {
        title: "Criteria-Based Progression & Testing",
        content:
          "Return-to-sport is never determined by time alone; instead, we use validated strength, power, agility, and sport-specific testing batteries to ensure every athlete meets physical prerequisites for safe reintegration. Testing includes single leg hops, change-of-direction, sprint and power metrics, psychological readiness scores, and movement quality screens.",
      },
      {
        title: "Personalized On-Field Rehabilitation",
        content:
          "Milestone-driven on-field sessions simulate sport intensity, using real play scenarios, while continuously monitoring pain, swelling, biomechanics, and confidence. Advanced wearable tech and heart rate monitoring dial in workload, ensuring metabolic and neuromuscular fitness matches your sport's highest demands.",
      },
      {
        title: "Multidisciplinary Team Collaboration",
        content:
          "Our physiotherapists work in concert, as needed, with sports physicians, orthopedic surgeons, S&C coaches, mental health specialists, and your personal trainers for seamless, 360° support throughout the return-to-sport continuum.",
      },
      {
        title: "Psychological & Contextual Readiness",
        content:
          "Return-to-sport is optimized when physical capability is matched with psychological confidence and context awareness. Guided education, expectation setting, and psychological readiness screening reduce fear and foster enthusiasm for return.",
      },
      {
        title: "Injury Prevention Integration",
        content:
          "Every program includes prehabilitation, load management, movement retraining, and monitoring for persistent deficits—a proven way to reduce reinjury rates and prolong sporting careers.",
      },
    ],
    treatmentAreas: [
      "Athletes and active individuals post-injury or surgery (ACL, rotator cuff, fractures)",
      "Post-operative rehab for ligament repairs and reconstructions",
      "Youth, amateur, and elite athletes—including chronic/complex recoveries",
    ],
    whyChooseUs: [
      "Global frameworks, local expertise: Aligned with latest IOC, IFSPT, and Aspetar guidelines.",
      "Criterion-based, milestone-driven: Progress dictated by objective achievement, not arbitrary timelines.",
      "Performance-centered: Focus on not just safe return, but improved athletic potential upon comeback.",
    ],
    importanceNote:
      "Evidence-based return-to-sport protocols significantly reduce reinjury rates and optimize long-term athletic performance. Our comprehensive approach ensures athletes return with confidence, improved movement quality, and reduced risk of future injuries.",
    ctaMessage:
      "Ready to get back in the game—confident, conditioned, and resilient? Book your Return to Sport assessment now for Bengaluru's gold standard in sporting rehab.",
  },
  "Athletic conditioning": {
    title: "Athletic Conditioning – Advanced Science Meets Elite Performance",
    subtitle: "Comprehensive Athletic Conditioning at VitalPhysio⁺",
    description: `Athletic conditioning is the backbone of sports performance, injury prevention, and long-term health for every athlete—from youth beginners to seasoned pros. At VitalPhysio⁺, our Athletic Conditioning Program blends cutting-edge sports science, functional movement screening, and individualized strength, speed, and agility training to optimize your athletic potential and resilience.`,
    highlights: [
      {
        title: "Full Spectrum Athletic Assessment",
        content:
          "Biomechanical, metabolic, and performance testing identify strengths and growth areas. Screening includes range of motion, power, balance, core stability, endurance, and sport-specific skills.",
      },
      {
        title: "Custom Programming for All Sports & Levels",
        content:
          "Periodized, progressive strength and hypertrophy plans build foundational and sport-specific power. Agility, plyometric, speed, and change-of-direction drills develop quickness and movement efficiency relevant to your game. Cardiovascular fitness and metabolic conditioning enhance stamina and recovery capacity.",
      },
      {
        title: "Correction of Deficits and Weak Chains",
        content:
          'Addressing movement asymmetries, muscle imbalances, and flexibility restrictions minimizes injury risk and supports maximal efficiency. Neuromuscular retraining and proprioception drills fine-tune the athletic "engine."',
      },
      {
        title: "Technology-Driven Progress Tracking",
        content:
          "Wearables, force plates, and video analysis deliver actionable performance data and proof of gains.",
      },
      {
        title: "Education & Lifestyle Guidance",
        content:
          "Nutritional, hydration, mental skills, and recovery strategies are included to holistically support peak training and competition.",
      },
    ],
    treatmentAreas: [
      "Competitive and developing athletes across all sports",
      "Youth physical development programs",
      "Individuals returning to sport or seeking to optimize after a layoff",
      "Teams/organizations pursuing sustained performance success",
    ],
    whyChooseUs: [
      "Integrated support from physiotherapists, S&C coaches, and sport scientists: Multidisciplinary team provides seamless training, assessment, and injury prevention.",
      "Global standards, local delivery: Programs leverage international athletic conditioning frameworks, personalized for Indian athletes.",
      "Trackable, data-driven improvement: Regular retesting ensures progress and motivation.",
    ],
    importanceNote:
      "Athletic conditioning through evidence-based sports science significantly improves performance metrics, reduces injury rates, and extends athletic careers. Our comprehensive approach ensures sustainable improvements in strength, power, speed, agility, and sport-specific capacity.",
    ctaMessage:
      "Ready to level up your athletic career? Book your personalized athletic conditioning assessment and start your journey to peak performance—backed by world-class science and coaching.",
  },
  "Joint replacement recovery": {
    title:
      "Joint Replacement Recovery – Rapid Restoration—Mobility, Strength, and Independence",
    subtitle: "Expert Joint Replacement Rehabilitation at VitalPhysio⁺",
    description: `Joint replacement surgery—most commonly hip, knee, or shoulder—can be life-changing for those with severe arthritis, joint damage, or injury. However, outcomes depend heavily on expert post-operative rehabilitation. At VitalPhysio⁺, our evidence-based programs accelerate recovery, maximize joint function, and ensure sustained independence–all while reducing pain and risk of complications.`,
    highlights: [
      {
        title: "Personalized, Stage-Based Rehabilitation",
        content:
          "Individualized care plans tailored to surgery type, age, baseline strength/function, and any medical complexity. Staged progression: initial focus on pain/swelling reduction and safe mobility; later phases emphasize strengthening, balance, gait retraining, and advanced functional tasks. Continuous assessment and adjustment: Each patient's rate of progress and needs are monitored and adjusted for best outcomes.",
      },
      {
        title: "Multimodal Therapy Delivery",
        content:
          "Hands-on physiotherapy, targeted exercises, aquatic therapy, neuromuscular stimulation, and real-time movement feedback. Education in joint protection, use of assistive devices (walker, crutches, cane), fall risk reduction, and safe return to daily living. Home-based, clinic-based, and digital programs available for maximum access and adherence.",
      },
      {
        title: "Enhanced Recovery & Same-Day Discharge Pathways",
        content:
          'Specialist-led pathways for fast-track mobility, early hospital discharge, and safe transition to home. Emphasis on "prehabilitation": strengthening, mobility, and education before surgery—proven to improve recovery times and quality of life.',
      },
      {
        title: "Interdisciplinary, Patient-Centered Care",
        content:
          "Collaboration with surgeons, pain management specialists, and nurses, as needed. Family/caregiver involvement to support and sustain functional gains.",
      },
    ],
    treatmentAreas: [
      "Total hip, knee, and shoulder replacements (including simultaneous/bilateral)",
      "Complex revisions and post-operative complications",
      "Other joint prosthesis and reconstructive surgeries",
    ],
    whyChooseUs: [
      "2025 evidence-based protocols: Based on APTA, RCA, and international best-practice frameworks.",
      "Rapid, safe progression: Supervised by skilled physiotherapists with advanced monitoring technology.",
      "Goal-directed, life-ready outcomes: Focused on walking, stairs, pain-free movement, and return to community life.",
    ],
    importanceNote:
      "Expert post-operative rehabilitation is crucial for successful joint replacement outcomes. Evidence shows that structured, progressive physiotherapy significantly improves functional recovery, reduces complications, and enhances long-term joint survival and quality of life.",
    ctaMessage:
      "Ready for a confident recovery after joint replacement surgery? Book your post-op assessment for Bangalore's best evidence-based joint replacement rehab.",
  },
  "ACL repair": {
    title:
      "ACL Repair – Return to Strength, Stability, and Sport—Evidence-Driven Recovery",
    subtitle:
      "Comprehensive ACL Repair & Reconstruction Rehabilitation at VitalPhysio⁺",
    description: `The anterior cruciate ligament (ACL) is crucial for knee stability and high-level function in sport and daily life. Following ACL repair or reconstruction surgery, rehabilitation is key to regaining full strength, movement, and confidence—while minimizing reinjury risk. At VitalPhysio⁺, our ACL Rehab Program is individualized, milestone-based, and built for the fastest, safest route back to peak performance.`,
    highlights: [
      {
        title: "Phase-Based, Criterion-Driven Progression",
        content:
          "Recovery is tailored, not just timed. Progress is determined by clinical milestones—pain/swelling reduction, gait normalization, strength symmetry, and movement quality. Early phases focus on pain control, swelling management, safe mobility, and neuromuscular activation of the quadriceps and hamstrings. Later phases include advanced strength, endurance, proprioception, running progressions, and gradual sports integration as you meet objective functional criteria.",
      },
      {
        title: "Integrated Proprioceptive and Neuromuscular Training",
        content:
          "Our protocols combine strength work with advanced proprioceptive and neuromuscular retraining—proven to reduce reinjury rates and build lifelong joint health. Balance board, agility, and single-leg drills bridge the gap from basic recovery to high-level sport.",
      },
      {
        title: "Return-to-Sport Decision Making",
        content:
          "Return to running, jumping, and pivoting is based on validated testing—strength (at least 90% symmetry), hop, agility, and confidence—not arbitrary timelines. Psychological readiness and sport-specific skills training are integrated for complete, risk-reduced comeback.",
      },
      {
        title: "Technology-Enhanced Rehab",
        content:
          "Wearables, digital feedback, biofeedback, and remote monitoring support real-time progress and motivation.",
      },
      {
        title: "Education & Family-Support",
        content:
          "Every patient and their support system is trained in safe recovery, swelling/pain management, use of braces or aids, prevention of future injury, and what to expect at every stage.",
      },
    ],
    treatmentAreas: [
      "ACL repair and reconstruction (including complex, revision, or professional athlete cases)",
      "All graft types (autograft, allograft)",
      "Primary and revision procedures",
    ],
    whyChooseUs: [
      "Aspetar and international clinical guidelines: Latest, research-driven programs for ACL rehab and safe return to sport.",
      "Truly personalized care: Rate of progression is always based on your actual recovery, not just the calendar.",
    ],
    importanceNote:
      "Evidence-based ACL rehabilitation significantly reduces reinjury rates and optimizes return to sport performance. Our comprehensive, criterion-driven approach ensures athletes return stronger, more confident, and with reduced risk of future ACL injuries.",
    ctaMessage:
      "Regain your strength, confidence, and peak performance. Book your specialist ACL rehab at VitalPhysio⁺—Bangalore's leader in sports injury recovery.",
  },
  "Post-surgical rehabilitation": {
    title:
      "Post-surgical Rehabilitation – Accelerated Recovery—Restoring Strength, Mobility, and Function",
    subtitle: "Expert Post-surgical Rehabilitation at VitalPhysio⁺",
    description: `The journey to full recovery after surgery doesn't end at the operating room—it's just beginning. At VitalPhysio⁺, our Post-surgical Rehab Program harnesses the latest enhanced recovery protocols (ERAS), multimodal pain management, and individualized physiotherapy for a faster, smoother, and more complete return to everyday life.`,
    highlights: [
      {
        title:
          "Water Treadmill: Cutting-Edge Therapy for Joint Replacement Recovery",
        content:
          "Our state-of-the-art facility includes dedicated aquatic therapy and water treadmill sessions for all eligible joint replacement patients—hip, knee, and ankle.",
      },
      {
        title: "Early, Pain-Free Mobility",
        content:
          "Buoyancy reduces body weight, allowing earlier walking and movement after hip, knee, or ankle replacement, with much less pain and joint strain than on land.",
      },
      {
        title: "Reduced Swelling and Improved Circulation",
        content:
          "Hydrostatic pressure and gentle resistance of water decrease post-op edema and boost blood flow, speeding healing.",
      },
      {
        title: "Enhanced Muscle Strength and Gait",
        content:
          "The resistance of water builds muscle and restores a normal walking pattern (gait) long before it is possible on land, preventing muscle wastage and promoting balance.",
      },
      {
        title: "Faster Range of Motion Gains",
        content:
          "Patients achieve crucial bending and extension goals for hip and knee earlier, supporting better long-term outcomes.",
      },
      {
        title: "Lower Fall Risk, Greater Confidence",
        content:
          "Supported, slip-free walking environment reduces fear and the risk of falling—particularly beneficial for older adults after replacement surgery.",
      },
      {
        title: "Proven Results",
        content:
          "Research shows that combining water treadmill with conventional physiotherapy leads to faster, more complete recovery—including superior joint range, strength gains, and function.",
      },
    ],
    treatmentAreas: [
      "Personalized, procedure-specific recovery plans—joint-specific milestones, strength, and functional goals",
      "Combined aquatic (water treadmill) and land-based physiotherapy for optimal results",
      "Education in joint protection, assistive device use, and safe transition back home",
    ],
    whyChooseUs: [
      "State-of-the-art water treadmill technology for enhanced recovery outcomes",
      "Evidence-based enhanced recovery protocols (ERAS) and multimodal pain management",
      "Individualized physiotherapy programs tailored to your specific surgical procedure",
    ],
    importanceNote:
      "Post-surgical rehabilitation is crucial for optimal recovery outcomes. Evidence shows that structured, progressive physiotherapy combined with innovative modalities like water treadmill therapy significantly improves functional recovery, reduces complications, and enhances long-term surgical success.",
    ctaMessage:
      "Start your journey to complete recovery with our advanced post-surgical rehabilitation program. Book your assessment for faster, safer, and more effective healing.",
  },
  "Wound healing": {
    title:
      "Wound Healing – Advanced Recovery—Minimizing Scarring, Restoring Function",
    subtitle: "Comprehensive Wound Healing & Rehabilitation at VitalPhysio⁺",
    description: `Wound healing is an essential part of post-surgical and trauma recovery. Delayed healing and chronic wounds can limit mobility, disrupt quality of life, and increase the risk of infection. At VitalPhysio⁺, we deliver a multidisciplinary, technology-driven program to accelerate wound healing, reduce complications, and restore optimal tissue health.`,
    highlights: [
      {
        title: "Assessment & Individualized Plan",
        content:
          "Thorough wound assessment including size, depth, type (surgical, pressure, diabetic, traumatic), and contributing factors (circulation, mobility, nutrition). Care plans tailored to the wound, underlying medical issues, and patient goals.",
      },
      {
        title: "Advanced Physical Therapy Modalities",
        content:
          "Electrical stimulation and electromagnetic field therapy: Promotes faster tissue repair, reduces edema, and minimises infection. Laser and photobiomodulation: Proven to accelerate healing, reduce pain, and minimize scarring (including for chronic or slow-to-heal wounds). Ultrasound therapy: Enhances blood flow, improves cellular repair, and encourages granulation tissue development. Manual lymphatic drainage and targeted movement: Reduces swelling and improves circulation for optimal healing.",
      },
      {
        title: "Comprehensive Wound Management",
        content:
          "Best-practice wound care including specialized dressings, infection control, and offloading (for pressure or diabetic wounds) in collaboration with physicians and wound care nurses, as needed. Early mobilization (following ERAS principles) decreases post-op complications, supports tissue oxygenation, and enhances overall recovery.",
      },
      {
        title: "Education & Prevention",
        content:
          "Patient/caregiver guidance in wound hygiene, early detection of infection, and lifestyle promotion for better healing (nutrition, hydration, glycemic control, and pressure preservation).",
      },
    ],
    treatmentAreas: [
      "Post-surgical wounds (orthopedic, abdominal, cardiac, reconstructive)",
      "Chronic wounds and ulcers (diabetic, venous, pressure)",
      "Traumatic skin and soft tissue injuries",
    ],
    whyChooseUs: [
      "Latest technology: Evidence-based, non-invasive therapies for stubborn or slow-healing wounds.",
      "Integrated, multidisciplinary approach: Physical therapists, wound nurses, nutrition, and physician support.",
      "Personalized progress tracking: Regular reassessment for visible, measurable improvement.",
    ],
    importanceNote:
      "Advanced wound healing therapy significantly reduces healing time, minimizes complications, and improves tissue quality outcomes. Our evidence-based approach ensures optimal recovery while reducing the risk of infection and chronic wound development.",
    ctaMessage:
      "Want pain-free, rapid, and complete healing? Book a wound healing evaluation at VitalPhysio⁺—Bangalore's top choice for post-surgical and complex wound recovery.",
  },
  "Mobility restoration": {
    title:
      "Mobility Restoration – Regain Independence—Restore Strength, Confidence, and Life",
    subtitle: "Specialized Mobility Restoration Programs at VitalPhysio⁺",
    description: `Surgery, injury, or serious illness can severely restrict movement—affecting independence, mood, and quality of life. At VitalPhysio⁺, our expert physiotherapy team delivers advanced, individualized mobility restoration programs so you can move confidently, safely, and pain-free again.`,
    highlights: [
      {
        title: "Comprehensive Movement Assessment",
        content:
          "Evaluates joint range, muscle strength, balance, gait, and functional mobility (stairs, transfers, daily tasks). Identifies barriers—stiffness, pain, neurological issues, surgical scar tissue, and deconditioning.",
      },
      {
        title: "Personalized, Evidence-Based Interventions",
        content:
          "Progressive exercise therapy: Targets flexibility, strength, stability, and endurance. Manual therapy and joint mobilization: Reduces adhesions, improves range of motion, and eases pain. Gait and locomotion training: Includes water and land treadmill, overground, and balance platform therapies. Adaptive devices (walkers, canes, orthotics) provided/practiced as needed. Neuromuscular re-education: For balance, proprioception, and coordination—essential after neurologic injury or surgery. Technology-assisted rehab: Incorporates functional electrical stimulation, bodyweight-supported treadmill, and real-time feedback for safe, effective practice.",
      },
      {
        title: "Goal-Oriented Functional Relearning",
        content:
          "Every program is aimed at real-world independence: walking, climbing stairs, rising from chairs, and regaining hobbies/work/activity participation. Milestone-based progression tailored to your goals—from basic movement to sport-specific and advanced function.",
      },
      {
        title: "Patient/Caregiver Empowerment",
        content:
          "Education in safe movement, fall prevention, pacing, adaptive home modifications, and at-home exercises accelerate recovery and confidence.",
      },
    ],
    treatmentAreas: [
      "Post-surgical and post-injury patients (joint replacement, fractures, spine, neuro, cancer)",
      "Elderly or chronically ill patients with declining mobility or falls risk",
      "Neurological rehabilitation (stroke, spinal cord, neuropathy)",
    ],
    whyChooseUs: [
      "Advanced assessment & innovative therapy: Leading tech, hands-on care, and tailored exercises for rapid gains.",
      "Integrated recovery: Team-based approach (physiotherapists, occupational therapy, medical support).",
      "Real results: Measurable progress; successful return to independence, work, and life.",
    ],
    importanceNote:
      "Specialized mobility restoration significantly improves functional outcomes and quality of life. Evidence shows that comprehensive, progressive rehabilitation reduces disability, enhances independence, and accelerates return to meaningful activities and participation in life.",
    ctaMessage:
      "Ready to restore your movement and freedom? Book a personalized mobility assessment at VitalPhysio⁺—Bangalore's trusted center for recovery and independence.",
  },
  "Stroke recovery": {
    title: "Stroke Recovery – Restoring Movement, Mind, and Independence",
    subtitle: "Comprehensive Stroke Rehabilitation at VitalPhysio⁺",
    description: `A stroke can dramatically affect movement, communication, cognition, and independence. Early, high-intensity, and multidisciplinary rehabilitation is proven to maximize recovery, restore brain-body function, and elevate quality of life. At VitalPhysio⁺, our Stroke Recovery Program delivers globally benchmarked, patient-centered care for the best possible outcomes—every step of your journey.`,
    highlights: [
      {
        title: "Fast, Comprehensive Assessment",
        content:
          "Full evaluation of motor, sensory, cognitive, language, swallowing, and functional abilities guides a custom, goal-driven rehabilitation plan. Risk assessment for falls, contractures, pressure sores, and recurrent stroke.",
      },
      {
        title: "Targeted, Evidence-Based Interventions",
        content:
          "Task-oriented, intensive exercise therapy: Motor re-learning using function-based training restores strength, dexterity, and coordination. Constraint-induced movement therapy, Bobath, and mirror therapy for upper-limb and neuro-plasticity gains. Balance and gait retraining: Stepping practice, treadmill, bodyweight-supported, and overground gait therapies aid in walking and stability. Aerobic exercise: Boosts brain healing, cardiovascular fitness, and reduces future stroke risk—per AEROBIC consensus best practices. Speech, cognitive, and swallow therapy: In-depth language/communication recovery and dysphagia management integrated with occupational therapy. Adaptive devices and tech: Custom orthoses, mobility aids, and sensor-based biofeedback promote recovery and independence.",
      },
      {
        title: "Family, Education, and Caregiver Training",
        content:
          "Customized home programs and environmental modifications for safety, confidence, and lasting independence. Ongoing family/caregiver training and support.",
      },
      {
        title: "Continuous Monitoring and Re-evaluation",
        content:
          "Regular progress reviews, outcome tracking, and plan adjustments to maximize restoration of function and community integration.",
      },
    ],
    treatmentAreas: [
      "All types of stroke (ischemic, hemorrhagic, TIA)",
      "Acute, subacute, and chronic stroke recovery",
      "Young and elderly stroke survivors",
    ],
    whyChooseUs: [
      "World-class, multidisciplinary team: PT, Neuro, and Rehab experts.",
      "Strict protocol adherence: International stroke best practice guidelines.",
      "Outpatient, inpatient, and home-based options available.",
    ],
    importanceNote:
      "Early, high-intensity, and multidisciplinary stroke rehabilitation is proven to maximize recovery and significantly improve functional outcomes. Evidence shows that intensive, task-oriented therapy promotes neuroplasticity and enhances quality of life for stroke survivors.",
    ctaMessage:
      "Ready to reclaim your life and independence? Book a personalized stroke recovery assessment at VitalPhysio⁺—Bangalore's best for advanced neurological rehab.",
  },
  "Parkinson's disease": {
    title: "Parkinson's Disease – Restoring Movement, Balance, and Confidence",
    subtitle: "Advanced Parkinson's Disease Rehabilitation at VitalPhysio⁺",
    description: `Parkinson's disease (PD) poses unique challenges—affecting movement, balance, coordination, and quality of life. At VitalPhysio⁺, we provide a globally benchmarked, multidisciplinary Parkinson's Rehab Program utilizing state-of-the-art equipment and best-in-class clinical protocols for symptom control, fall reduction, and improved independence.`,
    highlights: [
      {
        title: "Multimodal, Equipment-Integrated Rehabilitation",
        content:
          "Treadmill training (with and without harness support): Improves gait speed, stride length, and walking confidence in PD patients. Harness-assisted technology enables intensive, safe training and reduces fall risk. Balance and stability platforms: Assess, retrain, and challenge static/dynamic balance—crucial for fall prevention, especially as PD progresses. Resistance training and progressive strengthening: Evidence shows resistance equipment helps reduce disease severity and motor decline. Cueing systems: Visual, tactile, and auditory cueing devices are used in-clinic to overcome gait freezing, improve step regularity, and reduce shuffling. Aerobic and cardiovascular equipment: Stepper, recumbent bike, and elliptical support daily movement and have shown cognitive and motor benefits. Functional electrical stimulation (FES): For selected patients, FES targets foot drop and assists with complex gait issues found in PD.",
      },
      {
        title: "Core Rehabilitation Strategies",
        content:
          "LSVT-BIG and amplitude-based movement therapy: Teaches larger, louder motions to combat bradykinesia and functional shrinking. Targeted flexibility and posture correction: Keeps joints supple, counters stooped posture, and maintains range of motion. Gait and dual-task training: Restores walking patterns, multitasking safety, and real-life function. Falls prevention and home hazard assessment: Essential for maintaining independence.",
      },
      {
        title: "Patient and Caregiver Empowerment",
        content:
          "Individualized home exercise plans, technology-driven progress tracking, and training in safe transfers and adaptive mobility for daily life. Community-based exercise guidance for long-term disease management.",
      },
    ],
    treatmentAreas: [
      "All PD stages (early to advanced Hoehn & Yahr)",
      "Freezing of gait, postural instability, bradykinesia, tremor",
      "Patients post-DBS, surgery, or with complex rehab needs",
    ],
    whyChooseUs: [
      "Full spectrum of modern modalities: Treadmill therapy, balance systems, cueing devices, resistance equipment, and FES.",
      "Multidisciplinary neurological expertise: Neurologists, PT/OT, speech therapy, neuropsych support on one team.",
      "Personalized, milestone-driven plans: Focus on maintaining independence, mobility, and quality of life, no matter the stage.",
    ],
    importanceNote:
      "Evidence-based Parkinson's rehabilitation significantly slows disease progression, improves motor function, and enhances quality of life. Early and ongoing physiotherapy intervention is crucial for maintaining independence and reducing fall risk in PD patients.",
    ctaMessage:
      "Ready to fight back against Parkinson's movement challenges? Book your advanced Parkinson's rehabilitation consultation at VitalPhysio⁺.",
  },
  "Multiple sclerosis": {
    title:
      "Multiple Sclerosis – Maintain Strength, Movement, and Everyday Potential",
    subtitle: "Comprehensive Multiple Sclerosis (MS) Rehab at VitalPhysio⁺",
    description: `Multiple Sclerosis (MS) presents unique challenges—ranging from mobility deficits and fatigue, to spasticity, balance, and cognitive change. At VitalPhysio⁺, our MS Rehabilitation Program uses a multidisciplinary, cutting-edge approach with personalized plans, equipment-based training, and the latest evidence for maximum independence and quality of life.`,
    highlights: [
      {
        title: "Early, Continuous, and Individualized Assessment",
        content:
          "Focused on core symptoms—including gait difficulty, limb weakness, stiffness, fatigue, and falls. Assessment-driven, goal-based therapy that evolves with your needs, using outcome metrics and regular progress checks.",
      },
      {
        title: "Advanced Modalities & Equipment Integration",
        content:
          "Treadmill therapy: Provide repetitive, intensive, and safe walking practice—even for those with severe mobility impairments. This boosts gait speed, endurance, and confidence. Balance and proprioceptive platforms: Reduce fall risk, support dynamic balance, and restore upright mobility. Functional electrical stimulation (FES) and muscle stim: Manage foot drop, spasticity, and muscle activation for better daily function. Progressive resistance and endurance programs: Use strength and cardiovascular equipment to fight weakness and improve activity tolerance. Aquatic therapy (where indicated): Offloads the body, making safe, pain-free movement possible for those with fatigue or spasticity. Assistive device training: Includes canes, walkers, orthoses, and home safety evaluations to maintain independence.",
      },
      {
        title: "Task-Specific, Evidence-Based Therapy",
        content:
          "Task-oriented and functional activity training: Promotes neuroplasticity, motor relearning, and transfer to real-world function. Fatigue and energy management: Strategies and pacing techniques to save effort, maintain mobility, and extend independence. Spasticity management, stretching, and custom exercise prescription: Reduces muscular tightness and improves range. Cognitive, speech, and swallowing support: For MS-related brain and bulbar symptoms.",
      },
      {
        title: "Support and Education",
        content:
          "Family/caregiver guidance, remote/tele-rehab options, and home exercise protocols for long-term benefit.",
      },
    ],
    treatmentAreas: [
      "MS (all types)—relapsing, progressive, or severe",
      "Mild to profound mobility impairment or fatigue",
      "Neurological and cognitive/functional symptoms",
    ],
    whyChooseUs: [
      "Expert multidisciplinary team & technology: Neurology partners, specialist PT/OT, advanced equipment, and evidence-driven therapies.",
      "Integrated, lifelong support: Emphasis on capability, confidence, and daily living.",
    ],
    importanceNote:
      "Comprehensive MS rehabilitation significantly improves functional capacity, reduces disability progression, and enhances quality of life. Evidence supports early and ongoing intervention to maintain independence and manage symptoms effectively.",
    ctaMessage:
      "Ready for more movement, stability, and confidence with MS? Book your personalized MS assessment at VitalPhysio⁺.",
  },
  "Spinal cord injuries": {
    title:
      "Spinal Cord Injuries – Maximizing Recovery, Independence, and Life Participation",
    subtitle: "Comprehensive Spinal Cord Injury (SCI) Rehab at VitalPhysio⁺",
    description: `A spinal cord injury (SCI) transforms life in an instant—affecting mobility, sensation, body control, and every aspect of independence. At VitalPhysio⁺, our SCI Rehab Program leverages global best practices, technology-enabled therapies, and multidisciplinary expertise to foster neurorecovery, restore function, and deliver hope for every patient.`,
    highlights: [
      {
        title: "Holistic, Individualized Assessment & Planning",
        content:
          "Detailed evaluation of neurologic level, functional capacity, secondary risks (spasticity, pressure sores, autonomic dysfunction), and personal goals. Custom plans tailored to paraplegia, quadriplegia, and incomplete injuries.",
      },
      {
        title: "Advanced Physiotherapy Modalities",
        content:
          "Activity-Based Therapy (ABT): Intensive, repetitive neuromuscular activation below injury level via treadmill, overground walking, and task-specific mass practice. Bodyweight-Supported & Gait Training: Enables safe, repetitive walking practice even for those initially non-ambulatory, supporting neural plasticity and faster progress. Functional Electrical Stimulation (FES): Stimulates paralyzed muscles for muscle re-education, walking, cycling, pain management, and spasticity reduction. Aquatic/Aqua Treadmill Therapy: For pain-free mobilization, improved cardiovascular health, and safe strength training. Strength, Endurance, and Coordination Training: Uses resistance equipment for upper and lower limb capacity, balance, and transfers. Assistive Device & Wheelchair Skills: Custom device fitting, transfers, mobility, and community navigation for independence.",
      },
      {
        title: "Integrated Complication Prevention",
        content:
          "Pressure ulcer prevention, respiratory and bladder management, pain and contracture protocols, autonomic regulation guidance. Education on adaptive techniques and injury-specific lifestyle optimization (home, work, and leisure).",
      },
      {
        title: "Psychological & Vocational Reintegration",
        content:
          "Counseling, emotional support, peer mentoring, and vocational planning for whole-person recovery.",
      },
    ],
    treatmentAreas: [
      "Traumatic and non-traumatic SCI (paraplegia, quadriplegia, cauda equina)",
      "Post-surgical, sub-acute, and chronic injuries",
      "All ages and functional levels",
    ],
    whyChooseUs: [
      "Evidence-based, protocol-driven care: Follows global CPGs, advances in neuroplasticity, and innovative tech.",
      "Expert, multidisciplinary team: Rehabilitation physician, PT/OT, nurse, psychology, vocational, and support staff.",
      "Measured outcomes: Clear milestones—mobility, self-care, participation, and ongoing independence.",
    ],
    importanceNote:
      "Early and comprehensive spinal cord injury rehabilitation significantly improves functional outcomes and quality of life. Evidence shows that intensive, activity-based therapy promotes neuroplasticity and can lead to meaningful recovery even years after injury.",
    ctaMessage:
      "Ready for expert, hope-driven SCI recovery? Book your holistic spinal cord injury assessment at VitalPhysio⁺.",
  },
  "Brain injuries": {
    title:
      "Brain Injuries – Comprehensive Neurorehabilitation for Recovery and Independence",
    subtitle: "Expert Brain Injury Rehabilitation at VitalPhysio⁺",
    description: `Brain injuries, whether traumatic or acquired, can significantly impact cognitive, physical, and emotional functioning. At VitalPhysio⁺, our specialized Brain Injury Rehabilitation Program provides evidence-based, multidisciplinary care to maximize recovery and restore independence through neuroplasticity-focused interventions.`,
    highlights: [
      {
        title: "Comprehensive Neurological Assessment",
        content:
          "Thorough evaluation of cognitive, motor, sensory, and functional abilities to develop personalized rehabilitation plans targeting specific deficits and recovery goals.",
      },
      {
        title: "Neuroplasticity-Based Interventions",
        content:
          "Task-specific training, repetitive practice, and functional activities designed to promote brain reorganization and recovery of lost functions through evidence-based neuroplasticity principles.",
      },
      {
        title: "Multidisciplinary Approach",
        content:
          "Coordinated care involving physiotherapy, occupational therapy, speech therapy, neuropsychology, and medical management for comprehensive rehabilitation addressing all aspects of recovery.",
      },
      {
        title: "Family and Caregiver Support",
        content:
          "Education and training for families and caregivers to support recovery goals, manage symptoms, and facilitate safe community reintegration.",
      },
    ],
    treatmentAreas: [
      "Traumatic brain injury (TBI) - mild to severe",
      "Stroke-related brain injury",
      "Acquired brain injury from various causes",
      "Post-surgical brain injury rehabilitation",
    ],
    whyChooseUs: [
      "Evidence-based neurological rehabilitation following international best practice guidelines.",
      "Specialized equipment and technology for brain injury recovery.",
      "Experienced multidisciplinary team with expertise in neurological conditions.",
    ],
    importanceNote:
      "Early and intensive brain injury rehabilitation is crucial for optimal recovery outcomes. Research demonstrates that structured, goal-oriented therapy promotes neuroplasticity and functional recovery even in severe cases.",
    ctaMessage:
      "Begin your journey to recovery with our specialized brain injury rehabilitation program. Book your comprehensive assessment today.",
  },
  COPD: {
    title:
      "COPD – COPD: Breathe Easier—Advanced Pulmonary Rehabilitation for Active Living",
    subtitle: "Comprehensive COPD Rehab at VitalPhysio⁺",
    description: `Chronic Obstructive Pulmonary Disease (COPD) can severely limit your breathing, independence, and daily activity. At VitalPhysio⁺, our team delivers world-class pulmonary rehabilitation (PR) and targeted physiotherapy to improve lung function, ease symptoms, and restore quality of life—no matter the stage of disease.`,
    highlights: [
      {
        title: "Thorough Functional & Symptom Assessment",
        content:
          "Evaluation of lung capacity, oxygen levels, breathlessness, activity limitation, and comorbidities, using modern spirometry and functional tests.",
      },
      {
        title: "Individualized, Evidence-Based Interventions",
        content:
          "Aerobic & Strength Training: Supervised treadmill and bike exercise, resistance equipment, and walking programs improve exercise tolerance and reduce breathlessness. Inspiratory Muscle Training & Breathing Exercises: Pursed-lip/diaphragmatic breathing, rib cage mobilization, and respiratory muscle conditioning support better air movement and endurance. Functional and Endurance Programs: Promote independence, enhance ADL performance, and increase daily movement confidence. Chest Physiotherapy & Airway Clearance Techniques: Reduce secretions, ease cough, and improve oxygenation using evidence-based techniques. Education & Self-Management: Empowerment in inhaler technique, pacing, energy conservation, and quick response to exacerbations. Oxygen Therapy & Monitoring: Clinical protocols adapted as needed for safe exercise and improved saturation.",
      },
    ],
    treatmentAreas: [
      "All COPD patients, including those stable or post-exacerbation",
      "Individuals post-hospitalization for COPD flare-up",
      "Patients with combined heart/lung or systemic issues",
    ],
    whyChooseUs: [
      "Guideline-driven, research-backed care: Follows international best practices.",
      "Cutting-edge equipment and high staff expertise: Safe, results-driven rehab for even severe disease.",
      "Trackable gains: Measurable improvements in lung function, activity, and reduced hospitalizations.",
    ],
    importanceNote:
      "Pulmonary rehabilitation is the gold standard treatment for COPD, proven to reduce symptoms, improve exercise capacity, and decrease hospitalizations. Early intervention significantly improves long-term outcomes and quality of life.",
    ctaMessage:
      "Ready to breathe better and live fuller? Book your pulmonary rehab assessment at VitalPhysio⁺.",
  },
  "Post-heart attack": {
    title:
      "Post-Heart Attack – Cardiac Rehabilitation for Heart Health and Recovery",
    subtitle: "Comprehensive Post-Heart Attack Rehabilitation at VitalPhysio⁺",
    description: `Recovery after a heart attack requires specialized cardiac rehabilitation to restore heart function, prevent future events, and regain confidence in physical activity. At VitalPhysio⁺, our Cardiac Rehabilitation Program provides evidence-based, medically supervised care to help you return to an active, heart-healthy lifestyle.`,
    highlights: [
      {
        title: "Comprehensive Cardiac Assessment",
        content:
          "Thorough evaluation of cardiovascular fitness, risk factors, and functional capacity using ECG monitoring, stress testing, and cardiac risk stratification to develop safe, effective exercise prescriptions.",
      },
      {
        title: "Medically Supervised Exercise Training",
        content:
          "Progressive aerobic and resistance training programs with continuous cardiac monitoring to safely improve cardiovascular fitness, strength, and endurance while reducing the risk of future cardiac events.",
      },
      {
        title: "Risk Factor Modification",
        content:
          "Comprehensive education and support for lifestyle changes including nutrition counseling, smoking cessation, stress management, and medication adherence to reduce cardiovascular risk factors.",
      },
      {
        title: "Psychological Support and Education",
        content:
          "Addressing anxiety, depression, and fear related to heart disease while providing education about heart-healthy living, activity modification, and recognizing warning signs.",
      },
    ],
    treatmentAreas: [
      "Post-myocardial infarction (heart attack) recovery",
      "Post-cardiac surgery rehabilitation",
      "Chronic heart failure management",
      "Cardiovascular risk reduction programs",
    ],
    whyChooseUs: [
      "Medically supervised programs following American Heart Association guidelines.",
      "State-of-the-art cardiac monitoring equipment for safe exercise training.",
      "Multidisciplinary team including cardiologists, physiotherapists, and nutritionists.",
    ],
    importanceNote:
      "Cardiac rehabilitation after heart attack reduces mortality by 20-25% and significantly improves quality of life. Early participation in structured programs is essential for optimal recovery and prevention of future cardiac events.",
    ctaMessage:
      "Take control of your heart health with our comprehensive cardiac rehabilitation program. Book your assessment for a stronger, healthier future.",
  },
  "Breathing difficulties": {
    title:
      "Breathing Difficulties – Respiratory Physiotherapy for Better Breathing",
    subtitle: "Comprehensive Respiratory Rehabilitation at VitalPhysio⁺",
    description: `Breathing difficulties can significantly impact daily activities and quality of life, whether from chronic conditions, post-surgical recovery, or respiratory infections. At VitalPhysio⁺, our Respiratory Physiotherapy Program provides specialized interventions to improve breathing efficiency, clear airways, and restore respiratory function.`,
    highlights: [
      {
        title: "Comprehensive Respiratory Assessment",
        content:
          "Detailed evaluation of breathing patterns, lung function, airway clearance needs, and functional limitations to develop targeted treatment plans for optimal respiratory health.",
      },
      {
        title: "Airway Clearance Techniques",
        content:
          "Evidence-based methods including chest physiotherapy, postural drainage, breathing exercises, and mechanical aids to clear secretions, improve ventilation, and enhance oxygen delivery.",
      },
      {
        title: "Breathing Retraining and Exercise",
        content:
          "Specialized breathing techniques, inspiratory muscle training, and progressive exercise programs to strengthen respiratory muscles and improve breathing efficiency during daily activities.",
      },
      {
        title: "Education and Self-Management",
        content:
          "Patient and family education on breathing techniques, energy conservation, inhaler use, and early recognition of respiratory complications for long-term management.",
      },
    ],
    treatmentAreas: [
      "Post-pneumonia and respiratory infection recovery",
      "Chronic respiratory conditions (asthma, bronchiectasis)",
      "Post-surgical respiratory complications",
      "Respiratory muscle weakness and dysfunction",
    ],
    whyChooseUs: [
      "Specialized respiratory physiotherapy techniques following international guidelines.",
      "Advanced respiratory assessment and monitoring equipment.",
      "Experienced respiratory physiotherapists with expertise in various breathing disorders.",
    ],
    importanceNote:
      "Early respiratory physiotherapy intervention significantly improves breathing function, prevents complications, and enhances recovery outcomes. Specialized breathing techniques can provide immediate relief and long-term benefits.",
    ctaMessage:
      "Breathe easier with our specialized respiratory physiotherapy program. Book your assessment for improved breathing and better quality of life.",
  },
  "Chest conditions": {
    title:
      "Chest Conditions – Comprehensive Chest Physiotherapy for Respiratory Health",
    subtitle: "Specialized Chest Condition Management at VitalPhysio⁺",
    description: `Chest conditions encompass a wide range of respiratory and thoracic disorders that can affect breathing, mobility, and overall quality of life. At VitalPhysio⁺, our Chest Physiotherapy Program provides comprehensive, evidence-based care to manage symptoms, improve function, and optimize respiratory health across various chest conditions.`,
    highlights: [
      {
        title: "Comprehensive Chest Assessment",
        content:
          "Thorough evaluation of chest wall mechanics, respiratory muscle function, breathing patterns, and functional capacity to identify specific impairments and develop targeted treatment approaches.",
      },
      {
        title: "Specialized Chest Physiotherapy Techniques",
        content:
          "Manual chest therapy, rib mobilization, breathing pattern correction, postural drainage, percussion and vibration techniques, and specialized positioning to optimize chest wall mobility and respiratory function.",
      },
      {
        title: "Functional Rehabilitation",
        content:
          "Progressive exercise programs, activity modification, and movement retraining to improve tolerance for daily activities while managing respiratory symptoms and chest discomfort.",
      },
      {
        title: "Patient Education and Self-Care",
        content:
          "Comprehensive education on condition management, breathing exercises, energy conservation techniques, and home programs to maintain respiratory health and prevent complications.",
      },
    ],
    treatmentAreas: [
      "Chest wall injuries and pain syndromes",
      "Post-thoracic surgery rehabilitation",
      "Chronic chest conditions and restrictive disorders",
      "Respiratory muscle dysfunction and chest wall deformities",
    ],
    whyChooseUs: [
      "Specialized expertise in chest physiotherapy techniques and respiratory conditions.",
      "Comprehensive approach addressing both mechanical and functional aspects of chest disorders.",
      "Evidence-based treatment protocols tailored to individual chest condition presentations.",
    ],
    importanceNote:
      "Specialized chest physiotherapy significantly improves respiratory function, reduces symptoms, and enhances quality of life for various chest conditions. Early intervention prevents complications and optimizes long-term outcomes.",
    ctaMessage:
      "Get specialized care for your chest condition with our comprehensive physiotherapy program. Book your assessment for targeted, effective treatment.",
  },
  "Cardiac rehabilitation": {
    title:
      "Cardiac Rehabilitation – Comprehensive Heart Health Recovery and Prevention",
    subtitle: "Evidence-Based Cardiac Rehabilitation at VitalPhysio⁺",
    description: `Cardiac rehabilitation is a medically supervised program designed to improve cardiovascular health, reduce risk factors, and enhance quality of life for individuals with heart disease. At VitalPhysio⁺, our Cardiac Rehabilitation Program combines exercise training, education, and support to help you achieve optimal heart health and prevent future cardiac events.`,
    highlights: [
      {
        title: "Medically Supervised Exercise Training",
        content:
          "Progressive, individualized exercise programs with continuous cardiac monitoring, including aerobic conditioning, resistance training, and flexibility exercises designed to safely improve cardiovascular fitness and functional capacity.",
      },
      {
        title: "Comprehensive Risk Factor Management",
        content:
          "Systematic approach to modifying cardiovascular risk factors including blood pressure management, cholesterol control, diabetes management, weight reduction, smoking cessation, and stress reduction through evidence-based interventions.",
      },
      {
        title: "Patient Education and Lifestyle Modification",
        content:
          "Extensive education on heart-healthy living, nutrition counseling, medication management, symptom recognition, and lifestyle changes to support long-term cardiovascular health and prevent disease progression.",
      },
      {
        title: "Psychosocial Support and Counseling",
        content:
          "Addressing psychological aspects of heart disease including anxiety, depression, and lifestyle adjustment through counseling, support groups, and stress management techniques to promote overall well-being.",
      },
    ],
    treatmentAreas: [
      "Post-myocardial infarction (heart attack) rehabilitation",
      "Post-cardiac surgery recovery (bypass, valve replacement)",
      "Chronic heart failure management and optimization",
      "Preventive cardiac care for high-risk individuals",
    ],
    whyChooseUs: [
      "Comprehensive cardiac rehabilitation following American Heart Association and international guidelines.",
      "State-of-the-art cardiac monitoring and exercise equipment for safe, effective training.",
      "Multidisciplinary team including cardiologists, exercise physiologists, nutritionists, and mental health professionals.",
    ],
    importanceNote:
      "Cardiac rehabilitation reduces cardiovascular mortality by 20-25% and significantly improves quality of life, exercise capacity, and psychological well-being. Participation in comprehensive programs is essential for optimal recovery and secondary prevention.",
    ctaMessage:
      "Invest in your heart health with our comprehensive cardiac rehabilitation program. Book your assessment to start your journey toward optimal cardiovascular wellness.",
  },
  "Pelvic floor dysfunction": {
    title:
      "Pelvic Floor Dysfunction – Pelvic Floor Dysfunction: Restore Control, Comfort, and Confidence",
    subtitle: "Advanced Pelvic Floor Rehabilitation at VitalPhysio⁺",
    description: `Pelvic floor dysfunction impacts urinary, bowel, and sexual health—causing symptoms like incontinence, urgency, pain, and pelvic organ prolapse. At VitalPhysio⁺, we use the most advanced assessment, training protocols, and technology to deliver lasting results—whether for women, men, or post-surgical patients.`,
    highlights: [
      {
        title: "Comprehensive Pelvic Floor Evaluation",
        content:
          "Detailed muscle, nerve, and connective tissue assessment—including manometry, EMG, and advanced digital palpation. Tailored diagnosis for stress/urge incontinence, prolapse, pelvic pain, sexual dysfunction, postpartum and post-prostate cases.",
      },
      {
        title: "Game Changer for Fast, Comfortable, Non-Invasive Treatment",
        content:
          "Repetitive Peripheral Magnetic Stimulation (rPMS): rPMS UI Chair delivers focused, painless magnetic field pulses, activating pelvic floor and accessory muscles up to 25Hz/2.5T to restore strength, endurance, and control—no undressing or internal probes required.",
      },
      {
        title: "Scientific benefits",
        content:
          "Proven rapid improvement for stress/urge incontinence, urgency-frequency syndromes, incomplete voiding, mild prolapse, sexual function, and postpartum recovery. Suitable for both men and women—including after prostatectomy or gynecological surgery. Facilitates deep, fatigue-resistant muscle contractions unreachable by voluntary exercise, making it ideal for weak, neurogenic, painful or post-op pelvic floors. Efficient, pain-free, and comfortable—patients are seated, fully clothed, for 15–30 minute protocols, twice weekly.",
      },
      {
        title: "Paired with Biofeedback and Manual Therapy",
        content:
          "Use of real-time biofeedback, dedicated pelvic floor exercise, behavioral training, soft tissue work, and home programs for comprehensive recovery.",
      },
      {
        title: "Supporting Modalities",
        content:
          "Electrical stimulation, manual therapy, relaxation/mobility, lifestyle education, and core strengthening as indicated. Full privacy and gender-sensitive care.",
      },
    ],
    treatmentAreas: [
      "Urinary/fecal incontinence, urgency, pelvic pain, sexual dysfunction, prolapse",
      "Postpartum women, post-prostatectomy men, athletes, and post-op surgery",
      "Failed conservative therapy or not candidates for invasive interventions",
    ],
    whyChooseUs: [
      "One of Bangalore's limited centers with cutting-edge technology for Pelvic Floor Health",
      "International, guideline-based protocols and specialist team",
      "Discrete, supportive, and measurable results",
    ],
    importanceNote:
      "Advanced pelvic floor rehabilitation significantly improves quality of life and functional outcomes for various pelvic floor disorders. Evidence shows that specialized physiotherapy combined with innovative technologies like rPMS provides superior results compared to traditional approaches alone.",
    ctaMessage:
      "Ready for lasting pelvic wellness? Book your private, advanced pelvic floor assessment—including rPMS UI Chair therapy—at VitalPhysio⁺ today.",
  },
  "Pregnancy-related pain": {
    title:
      "Pregnancy-Related Pain – Pregnancy-Related Pain: Comfortable Mothers, Healthy Pregnancies",
    subtitle: "Expert Pregnancy Pain Relief & Rehab at VitalPhysio⁺",
    description: `Pain and discomfort during pregnancy—such as low back pain, pelvic girdle pain (PGP), sciatica, and muscle tension—can limit sleep, movement, and quality of life. At VitalPhysio⁺, our women's health physiotherapists provide safe, evidence-backed, and compassionate care for relief in every trimester.`,
    highlights: [
      {
        title: "Dedicated Maternity Assessment",
        content:
          "Specialized evaluation of pelvic alignment, postural changes, muscle imbalances, and daily function, tailored to stage of pregnancy and health. Screening for diastasis recti, sciatica, round ligament pain, and underlying support problems.",
      },
      {
        title: "Personalized, Evidence-Based Therapy",
        content:
          "Manual therapy & soft tissue release: Gentle, hands-on treatment to ease tension, reduce nerve compression, and relieve joint pain. Therapeutic exercise: Functional stability exercises, core and pelvic girdle strengthening, stretching, and flexibility work proven to reduce pain and restore balance. Postural & ergonomic support: Education and training in optimal movement, sleeping, and work positions for pregnancy comfort. Support devices: Guidance on maternity belts or supports when indicated for pelvic pain, instability, or back discomfort. Water-based therapy (if eligible): Aquatic exercise for gentle, pain-free relief, particularly in late pregnancy or severe back/pelvic pain.",
      },
      {
        title: "Pain Management Modalities",
        content:
          "Use of safe modalities including TENS (where appropriate), heat/cold, and safe relaxation/mind-body techniques. Comprehensive, multi-modal approach to manage complex or severe pain.",
      },
      {
        title: "Education & Empowerment",
        content:
          "Birth prep training, self-care routines, and movement strategies to minimize pain and prepare for labor and postpartum.",
      },
      {
        title: "Digital & In-Person Options",
        content:
          "Support for continuity of care—including telephysio, mobile resources, and tailored home routines for ongoing improvement.",
      },
    ],
    treatmentAreas: [
      "Back pain, PGP, sciatica, round ligament, rib pain",
      "All trimesters, postpartum, twin/multiple pregnancies, high-risk pregnancies",
      "Women seeking safe, hands-on, and non-drug care",
    ],
    whyChooseUs: [
      "Specialist team: Certified women's health and maternity physiotherapists",
      "Research-proven protocols: Based on 2025 clinical evidence",
      "Compassionate core focus: Privacy, comfort, and measurable results",
    ],
    importanceNote:
      "Safe, evidence-based physiotherapy during pregnancy significantly reduces pain, improves functional capacity, and enhances quality of life for expectant mothers. Early intervention prevents complications and supports healthy pregnancy outcomes.",
    ctaMessage:
      "Ready for relief and comfort during pregnancy? Book your pregnancy pain assessment at VitalPhysio⁺—Bangalore's leader for women's health physiotherapy.",
  },
  Incontinence: {
    title:
      "Incontinence – Incontinence: Restore Control—Innovative, Non-Invasive Solutions",
    subtitle:
      "Comprehensive Incontinence Rehabilitation at VitalPhysio⁺ Featuring rPMS UI Chair",
    description: `Urinary or fecal incontinence can seriously impact quality of life, confidence, and social freedom. At VitalPhysio⁺, we target the root causes of incontinence using the full spectrum of pelvic health therapies—combining hands-on expertise, latest technology, and a compassionate approach for real, lasting results.`,
    highlights: [
      {
        title: "Game-Changing, Non-Invasive Magnetic Stimulation",
        content:
          "The UI Chair uses focused, high-intensity repetitive magnetic pulses to stimulate the pelvic floor muscles—activating thousands of powerful contractions in a single session, far beyond what is possible with voluntary Kegel exercise. Effortless therapy: Patients simply sit, fully clothed, for 15–30 minute sessions. No probes, no pain, no downtime.",
      },
      {
        title: "Clinically proven for",
        content:
          "Stress, urge, and mixed urinary incontinence. Fecal incontinence/urgency. Post-prostatectomy, postnatal, and menopausal cases. Failed Kegel or home exercise attempts. How it works: rPMS efficiently activates deep pelvic floor and sphincter muscles—even in those unable to perform correct voluntary contractions, a common barrier to success with exercise-based rehab. Rapid, measurable results—most patients notice improvements after the first few sessions and significant gains by the full protocol's end.",
      },
      {
        title: "Pelvic Floor Muscle Training (PFMT)",
        content:
          "Foundation of conservative incontinence management—customized plans with digital/biofeedback support. Group/tele-rehab options available for ongoing support.",
      },
      {
        title: "Biofeedback and Electrical Stimulation",
        content:
          "Real-time feedback to improve muscle awareness, voluntary contraction, and release. Electrical/electrostimulation complements rPMS for cases needing targeted neuromuscular re-education.",
      },
      {
        title: "Manual Therapy & Behavioral Training",
        content:
          "Soft tissue work, bladder retraining, urgency control, and functional daily habit modification for long-lasting effects.",
      },
      {
        title: "Education & Prevention",
        content:
          "Empowering patients (and caregivers) with bladder/bowel management strategies, home exercise routines, and lifestyle guidance.",
      },
    ],
    treatmentAreas: [
      "Women and men with stress, urge, or mixed urinary incontinence",
      "Fecal incontinence, post-surgical, postpartum, and neurologic cases",
      'Those who have "failed" Kegels or prefer non-invasive, high-tech treatment',
    ],
    whyChooseUs: [
      "One of Bengaluru's few centers equipped with the UI Chair and specialist pelvic health team.",
      "2025 gold-standard protocols: Multimodal, research-validated, compassionate care.",
      "Discreet, supportive, patient-centered environment—confidentiality is always protected.",
    ],
    importanceNote:
      "Advanced incontinence rehabilitation using innovative technologies like rPMS UI Chair significantly improves quality of life and functional outcomes. Evidence shows that comprehensive, non-invasive pelvic floor therapy provides superior results for various types of incontinence.",
    ctaMessage:
      "Ready to regain confidence and control? Book your private incontinence rehab assessment at VitalPhysio⁺—experience the future of non-invasive pelvic floor therapy.",
  },
  Osteoporosis: {
    title:
      "Osteoporosis – Osteoporosis: Build Stronger Bones, Prevent Falls—Safe, Effective Rehabilitation",
    subtitle: "Comprehensive Osteoporosis Rehab at VitalPhysio⁺",
    description: `Osteoporosis weakens bones and raises the risk of fractures, especially in the spine, hip, and wrist. But targeted physiotherapy can markedly slow bone loss, reduce fall risk, and preserve your independence. At VitalPhysio⁺, we deliver gold-standard osteoporosis management with a multidisciplinary team, cutting-edge protocols, and personalized care.`,
    highlights: [
      {
        title: "Comprehensive Functional & Bone Health Assessment",
        content:
          "Includes fracture risk evaluation, mobility/balance testing, posture analysis, and review of current health and medications. Collaboration with medical team to ensure safe rehab around DEXA scores and overall bone status.",
      },
      {
        title: "Evidence-Based Physiotherapy for Osteoporosis",
        content:
          "Weight-bearing & Resistance Training: Safely prescribed walking, stair climbing, resistance bands, and strength routines to maximize bone mineral density (BMD) and muscle function. Postural & Extension Exercise: Corrects kyphosis, improves back strength, and reduces vertebral fracture risk—progressions include chin tucks, scapular retractions, thoracic extension, and hip extensions. Balance, Coordination & Fall Prevention: Proven techniques such as Otago or Tai Chi, plus home hazard education, address the #1 cause of osteoporotic fracture. Flexibility & Joint Mobility Exercises: Gentle stretching to reduce stiffness, increase movement range, and ease pain. Safe Aerobic Activity: Low-impact choices (walking, stationary cycling, hydrotherapy if indicated)—leverage cardiovascular and musculoskeletal benefits.",
      },
      {
        title: "Lifestyle, Nutrition, & Medication Optimization",
        content:
          "Counseling in bone-healthy diet (calcium, vitamin D), medical compliance, smoking/alcohol cessation, and sleep strategies. Guidance on safe daily living, home safety, and modifying activities to avoid sudden/jarring movements or high fall risk.",
      },
      {
        title: "Progress Tracking & Support",
        content:
          "Milestone-based progress checks, home programs, digital/wearable reminders, and motivational coaching for adherence and prevention.",
      },
    ],
    treatmentAreas: [
      "Adults with osteoporosis, osteopenia, high fracture risk",
      "Post-fracture and post-surgical bone recovery",
      "Men/women with family history, medication-induced or age-related bone loss",
    ],
    whyChooseUs: [
      "Multidisciplinary team: Experienced therapists",
      "2025 guideline-driven care: Protocols aligned with APTA, WHO, and major osteoporosis societies",
      "Real, trackable improvement: Safer, stronger, more confident movement and reduced injury/fall risk",
    ],
    importanceNote:
      "Evidence-based osteoporosis rehabilitation significantly improves bone density, reduces fracture risk, and enhances quality of life. Early intervention with specialized physiotherapy can slow bone loss progression and maintain independence for longer periods.",
    ctaMessage:
      "Ready to protect your bones and independence? Book a comprehensive osteoporosis assessment at VitalPhysio⁺.",
  },
  "Fall prevention": {
    title:
      "Fall Prevention – Fall Prevention: Stay Strong, Stay Independent—Geriatric Physiotherapy for Safety and Confidence",
    subtitle:
      "Comprehensive Fall Prevention Program for Seniors at VitalPhysio⁺",
    description: `Falls are the #1 cause of injury, hospitalization, and reduced independence in older adults—but most falls can be prevented. At VitalPhysio⁺, our geriatric specialists deliver personalized fall prevention programs using the latest screening, advanced therapies, and evidence-based exercise for safety, stability, and active living.`,
    highlights: [
      {
        title: "Multifactorial Risk Assessment",
        content:
          "Screening for strength, balance, gait, vision, home hazards, medications, and chronic conditions (using global CPGs and the CDC STEADI/WHO protocols). Individualized risk profiling for every patient—covering prior falls, mobility issues, dizziness/vertigo, continence, osteoporosis, and daily environment.",
      },
      {
        title: "Targeted, Evidence-Based Interventions",
        content:
          "Balance and Proprioception Training: Dynamic and static exercises incorporating Tai Chi, Otago, and state-of-the-art equipment to improve stability. Strength and Endurance Programs: Upper/lower body, core, and postural muscle strengthening using weights, resistance bands, and functional movement. Gait and Mobility Rehabilitation: Gait analysis, walking retraining, and safe use of assistive devices (canes, walkers, orthoses, footwear review). Vestibular and Vision Support: Therapy for dizziness, vertigo, and vision-related instability.",
      },
      {
        title: "Home Hazard Assessment and Modification",
        content:
          "In-clinic and home visits to identify and fix slippery floors, poor lighting, loose rugs, and other risks—protecting safety at every step. Education in footwear, clothing, and adaptive equipment use.",
      },
      {
        title: "Medication, Bone Health, and Continence Review",
        content:
          "Collaboration with primary care, pharmacy, and specialty providers for holistic fall prevention.",
      },
      {
        title: "Education & Motivation",
        content:
          "Empowerment for patients and families on safe transfers, fall recovery, and maintaining independence. Technology for monitoring, reminders, and support, plus group and individual program options.",
      },
    ],
    treatmentAreas: [
      "Adults 60+ with or without a prior fall",
      "Those with balance, strength, or mobility decline, vision/vestibular issues",
      "Post-hospital, post-fracture, osteoporosis, Parkinson's, stroke, or dementia",
    ],
    whyChooseUs: [
      "Expert geriatric therapists: Certified, compassionate, and guideline-driven.",
      "Trackable improvement: Measurable reduction in fall rates and fear of falling.",
      "Integrated Care: Links to bone health, continence, dizziness, and pain management services.",
    ],
    importanceNote:
      "Evidence-based fall prevention programs significantly reduce fall rates by 20-30% in older adults. Early intervention with comprehensive assessment and targeted training prevents injuries and maintains independence longer.",
    ctaMessage:
      "Ready to prevent falls and stay independent? Book your senior fall prevention assessment at VitalPhysio⁺.",
  },
  "Balance training": {
    title:
      "Balance Training – Balance Training: Restore Stability—Reduce Falls, Move with Confidence",
    subtitle: "Cutting-Edge Balance Rehabilitation at VitalPhysio⁺",
    description: `Impaired balance increases the risk of falls, injury, and loss of independence—especially in older adults, neurological patients (stroke, Parkinson's, MS), and after surgery or injury. At VitalPhysio⁺, we deliver results-driven, tech-enabled balance training for all ages and diagnoses, blending the most current science with personalized progression.`,
    highlights: [
      {
        title: "Comprehensive Balance & Gait Assessment",
        content:
          "Evaluation using clinical scales (Berg Balance, Timed Up and Go, Functional Reach) and advanced platform/biofeedback systems to pinpoint weaknesses. Includes postural sway, dynamic balance, single-leg and multi-sensory challenges.",
      },
      {
        title: "Individualized, Therapy-Driven Training",
        content:
          "Progressive Static and Dynamic Balance Training: Exercises ranging from standing, tandem stance, and single-leg tasks to dynamic reaching, stepping, and agility activities. Strength, Power, and Functional Movement: Lower limb and core strength are foundational for balance—resistance work is integrated with positional and multi-planar motions. Multi-Modality Protocols: Incorporates Tai Chi, Yoga, Otago, and balance-circuit training for enhanced compliance and neuro-muscular gains. Gait, Posture & Vestibular Rehab: Gait training for foot placement, rhythm, and dual-task safety; vestibular exercises for those with dizziness/vertigo.",
      },
      {
        title: "Technology, Feedback & Advanced Modalities",
        content:
          "Use of balance boards, and real-time sensor/visual feedback for immersive, engaging, and maximally effective balance retraining. Computer-game therapy is available for higher-level challenges and persistent deficits.",
      },
      {
        title: "Education, Motivation, & Home Safety",
        content:
          "Home/practical training, caregiver instruction, and adaptive device prescription. Digital program tracking, reminders, and tele-rehab support for ongoing improvement.",
      },
    ],
    treatmentAreas: [
      "Elderly with falls or stability loss, post-fracture, post-TKA/THR",
      "Neurological conditions: stroke, Parkinson's, MS, head injury",
      "Post-immobility, vestibular, or balance-specific disorders",
    ],
    whyChooseUs: [
      "Expert, certified therapists: Geriatric, neuro, and ortho balance expertise",
      "Advanced equipment and tech: Computerized feedback",
      "Trackable, measurable outcomes: Sustainable confidence and safety at home and in the community",
    ],
    importanceNote:
      "Targeted balance training significantly improves stability and reduces fall risk by up to 40%. Evidence shows that progressive, multi-modal balance interventions enhance confidence and maintain independence in various populations.",
    ctaMessage:
      "Ready for better balance and new confidence? Book your advanced balance assessment at VitalPhysio⁺—Bangalore's home for falls prevention and mobility restoration.",
  },
  "Mobility issues": {
    title:
      "Mobility Issues – Mobility Issues: Move Freely—Regain Independence, Confidence, and Participation",
    subtitle: "Comprehensive Mobility Rehabilitation at VitalPhysio⁺",
    description: `Mobility issues—trouble with walking, transfers, balance, or overall movement—limit independence, increase fall risk, and reduce quality of life. Whether due to age, neurological conditions (like stroke, Parkinson's, MS, SCI), injury, surgery, or chronic illness, our specialists at VitalPhysio⁺ deliver world-class functional rehabilitation targeting YOUR specific impairments and goals.`,
    highlights: [
      {
        title: "Functional, Person-Centered Assessment",
        content:
          "In-depth evaluation: Strength, joint range, balance, walking/gait, endurance, pain, assistive device use, and environmental barriers. Uses standardized outcome measures for tracking real progress (timed up and go, gait speed, 6-minute walk, ADLs).",
      },
      {
        title: "Evidence-Based, Individualized Therapy",
        content:
          "Task-Oriented Functional Training: Practice of standing, transferring, indoor and outdoor walking, stair navigation, and daily activity retraining. Strength, Balance, and Gait Interventions: Lower limb & core strengthening, neuromuscular re-education, posture restoration, overground/treadmill gait, and advanced balance work. Assistive Devices & Adaptive Equipment: Custom selection, fitting, and training in canes, walkers, orthoses, prostheses, wheelchairs, or home modifications for safe independence. Pain and Flexibility Management: Manual therapy, stretching, modalities to address stiffness and support movement restoration.",
      },
      {
        title: "Education & Empowerment",
        content:
          "Fall prevention, home adaptation, pacing strategies, and caregiver/family instruction. Self-management plans for lifelong wellness, confidence, and return to favorites—work, leisure, or community.",
      },
    ],
    treatmentAreas: [
      "Elderly or medically unwell individuals with declining mobility",
      "Neurological patients—stroke, head injury, SCI, Parkinson's, MS, CP",
      "Orthopedic, amputation, post-surgical, or chronic disease mobility loss",
    ],
    whyChooseUs: [
      "Comprehensive, person-centered approach addressing all aspects of mobility",
      "Advanced assessment tools and outcome measures for tracking progress",
      "Expert team with experience across all age groups and diagnostic conditions",
    ],
    importanceNote:
      "Early mobility rehabilitation significantly improves functional outcomes and quality of life. Evidence shows that comprehensive, goal-oriented mobility training reduces disability and enhances independence across various conditions.",
    ctaMessage:
      "Ready to move further, safer, and live life your way? Book your advanced mobility evaluation at VitalPhysio⁺.",
  },
  "Age-related conditions": {
    title:
      "Age-Related Conditions – Age-Related Conditions: Active Aging—Restore Strength, Mobility, and Independence",
    subtitle:
      "Expert Rehabilitation for Age-Related Conditions at VitalPhysio⁺",
    description: `As we age, the body naturally undergoes changes—reduced muscle strength, joint flexibility, bone and cartilage loss, as well as slowed balance, cognition, and recovery. Chronic diseases often coexist (arthritis, osteoporosis, diabetes, cardiac/lung disease, Parkinson's). At VitalPhysio⁺, we provide evidence-based, multidisciplinary physiotherapy to address and anticipate the unique healthcare needs of every senior.`,
    highlights: [
      {
        title: "Comprehensive Geriatric Assessment",
        content:
          "Evaluation of mobility, flexibility, balance, pain, neurological function, ADLs (activities of daily living), cognitive and mood status, and home environment. Identification of risk factors and social determinants that impact successful aging.",
      },
      {
        title: "Tailored, Multimodal Intervention",
        content:
          "Strength & Functional Training: Gentle, progressive resistance exercise, functional activities (walking, sit-to-stand, stair climbing), and core/postural strengthening. Joint Mobility and Pain Management: Manual therapy, stretching, modalities (heat, TENS), and education for arthritis, back pain, and stiffness. Balance, Coordination, and Vestibular Therapy: Reduces fall risk and supports active living. Gait & Assistive Device Training: Canes, walkers, orthotics, and home safety/adaptations for independence. Chronic Disease Management: Cardiopulmonary therapy for heart/lung illness, continence support, bone health, and diabetes care. Cognitive & Mental Health Support: Integration of dual-task training, cognitive exercise, and education for dementia and depression. Group, Home & Digital Program Options: Peer motivation, remote monitoring, telehealth, and community-based, family-oriented plans.",
      },
      {
        title: "Education, Motivation & Prevention",
        content:
          "Nutritional, medication, and fall prevention counseling. Empowerment for seniors and families in self-care and proactive healthy aging.",
      },
    ],
    treatmentAreas: [
      "Arthritis, osteoporosis, back/neck pain, sarcopenia",
      "Neurological diseases (Parkinson's, stroke, neuropathy)",
      "Frailty and balance impairment",
      "Post-surgical, post-injury recovery",
      "Incontinence, chronic respiratory or cardiac disease",
    ],
    whyChooseUs: [
      "Guideline-driven, person-centered care: Based on APTA, WHO, and the latest 2025 global best practices.",
      "Measurable, inspiring results: Improved function, confidence, and life quality for every senior.",
    ],
    importanceNote:
      "Evidence-based geriatric rehabilitation significantly improves functional outcomes and quality of life for older adults. Early intervention with comprehensive assessment and targeted therapy prevents decline and maintains independence for longer periods.",
    ctaMessage:
      "Ready for active, independent aging? Book your comprehensive geriatric assessment at VitalPhysio⁺.",
  },
  "Strength maintenance": {
    title:
      "Strength Maintenance – Strength Maintenance: Stay Strong, Active & Independent—Physiotherapy for Life",
    subtitle: "Personalized Strength Maintenance Programs at VitalPhysio⁺",
    description: `As we age—or after injury, surgery, or illness—muscle loss can sap strength, slow recovery, and raise the risk of falls, frailty, and functional decline. But with the right evidence-based physiotherapy plan, you can preserve and rebuild strength for better health, enhanced activity, and confident independence.`,
    highlights: [
      {
        title: "Full Strength & Functional Evaluation",
        content:
          "Assessment of muscle power, endurance, mobility, posture, and daily activities using advanced tools (grip strength, 1RM testing, functional tasks). Tracking sarcopenia risk and physical frailty for tailored intervention.",
      },
      {
        title: "Targeted, Individualized Progressive Resistance Training",
        content:
          "Programs based on optimal dosage: ~3 weekly sessions, multi-set/rep routines at 50%–85% of maximal effort, as appropriate. Focused on major muscle groups—legs, hips, core, arms—using bands, free weights, bodyweight, and machines. Adaptable to fitness level, orthopaedic/medical status, and rehab phase. Emphasis on progressive overload, controlled movement, and proper technique for safe gains in muscle quality and strength.",
      },
      {
        title: "Integrated Functional Strength Activities",
        content:
          "Sit-to-stand, stair climbing, walking uphill, reaching, and real-world lifting—building power, balance, and functional ability. Balance and agility drills to complement muscle work and prevent falls.",
      },
      {
        title: "Joint, Bone & Cardiovascular Health Focus",
        content:
          "Combines loading for bones/osteo prevention with strength for joint protection. Minimal risk of injury when expertly supervised—especially important in seniors or those with pain.",
      },
      {
        title: "Motivation, Adherence & Lifelong Support",
        content:
          "Group and solo options, digital/app-based programs, educated tracking, and periodic retesting for continued progress.",
      },
    ],
    treatmentAreas: [
      "Older adults (50+), post-injury/surgery, chronic disease",
      "Pre-/post-joint replacement, osteoporosis, balance/falls risk",
      "Anyone aiming for functional longevity and daily energy",
    ],
    whyChooseUs: [
      "Personalized, science-backed plans: Designed by specialists for YOUR body and needs",
      "Modern equipment, home & clinic-based options: Convenience, safety, and variety",
      "Real, measurable results: Safeguard active living at every age",
    ],
    importanceNote:
      "Evidence-based strength maintenance programs significantly improve muscle mass, bone density, and functional capacity. Regular resistance training reduces fall risk and maintains independence while enhancing overall quality of life.",
    ctaMessage:
      "Ready for greater strength, vitality, and self-reliance? Book your physiotherapy-based strength maintenance consult at VitalPhysio⁺—Bangalore's go-to for lifelong muscle health.",
  },
  "Urinary incontinence": {
    title:
      "Urinary Incontinence – Expert Urinary Incontinence Rehabilitation at VitalPhysio⁺ with UI Chair",
    subtitle: "Advanced Non-Surgical Urinary Incontinence Treatment",
    description: `Urinary incontinence (UI)—involuntary loss of urine during movement, coughing, urgency, or daily life—can happen at any age, after childbirth, surgery, or just with aging. At VitalPhysio⁺, we provide the most advanced, compassionate, and results-driven care for all types of UI without surgery or drugs.`,
    highlights: [
      {
        title: "rPMS with UI Chair: Breakthrough, Effortless Recovery",
        content:
          'Delivers focused, repetitive magnetic pulses to painlessly stimulate and strengthen the entire pelvic floor—initiating thousands of deep contractions in a short, fully clothed session. Ideal for those unable to contract pelvic floor muscles ("failed Kegel" or poor muscle awareness), post-childbirth, after prostatectomy, and for advanced age or neurologic cases. Rapid improvements for stress, urge, and mixed incontinence—with clinical results often reported after just a few treatment sessions. Fully non-invasive: No electrodes, no probes, no discomfort, no recovery time.',
      },
      {
        title: "Comprehensive Pelvic Floor Physiotherapy",
        content:
          'Pelvic Floor Muscle Training (PFMT): The global first-line for all incontinence types—guided, progressive, and adapted for strength, power, and endurance. Biofeedback: Provides instant feedback to ensure correct, high-quality contractions—especially for those with reduced muscle perception. Electrical Stimulation & Behavioral Retraining: Can complement rPMS for stubborn cases, urgency, or detrusor instability. The "Knack" and Functional Training: Pre-emptive contraction coaching, real-world movement correction, and bladder programming.',
      },
      {
        title: "Holistic Support & Prevention",
        content:
          "Education in bladder and fluid management, daily habit modification, safe exercise, and long-term maintenance. Integration with urology, gynecology, and medical providers as needed.",
      },
    ],
    treatmentAreas: [
      "Women (all ages, post-childbirth, menopause), men (after prostate surgery), elderly",
      "Stress (cough/sneeze), urge, mixed, and overflow incontinence",
      'Neurological and post-surgical patients, "failed Kegel"/home therapies',
    ],
    whyChooseUs: [
      "One of Bengaluru's few focused on full pelvic health specialty",
      "Guideline-driven, multimodal approach: Highest-level care for every type, cause, and severity of urinary incontinence",
      "Private, supportive, patient-centered: Confidentiality, comfort, and measurable progress",
    ],
    importanceNote:
      "Advanced urinary incontinence rehabilitation using innovative technologies like rPMS UI Chair significantly improves quality of life and functional outcomes. Evidence shows that comprehensive, non-invasive pelvic floor therapy provides superior results for all types of urinary incontinence.",
    ctaMessage:
      "Book your confidential assessment for incontinence at VitalPhysio⁺—experience modern, effortless, life-changing pelvic health in Bangalore.",
  },
  "Faecal incontinence": {
    title:
      "Faecal Incontinence – Faecal Incontinence: Restore Control—Compassionate, Effective, Non-Invasive Rehab",
    subtitle:
      "Advanced Faecal Incontinence Physiotherapy at VitalPhysio⁺ featuring rPMS UI Chair",
    description: `Faecal incontinence (FI)—unintentional loss of stool or gas—is distressing but treatable. Causes may include childbirth, nerve or sphincter injury, aging, or certain surgeries. At VitalPhysio⁺, we offer research-driven, non-surgical continence care with the region's most advanced tech, the rPMS UI Chair, for real, lasting change.`,
    highlights: [
      {
        title: "rPMS UI Chair: Gentle, Deep Magnetic Stimulation",
        content:
          "Painless, non-invasive repetitive magnetic stimulation induces powerful pelvic floor and anal sphincter contractions while you relax, fully clothed. It's uniquely effective when voluntary control is poor, and enhances muscle strength, endurance, and reflex—especially in those who struggle with standard pelvic exercises. Suited for stress, urge, post-surgical, or neurologic incontinence. Complements manual and biofeedback strategies for faster, deeper gains.",
      },
      {
        title: "Comprehensive Pelvic Floor Rehabilitation",
        content:
          "Pelvic Floor Muscle Training (PFMT) & Anal Sphincter Exercise: Focused, evidence-based routines to build strength, coordination, and sensitivity for bowel control. Biofeedback: Visual and sensory training for accuracy and retraining, especially useful for isolated or complex muscle deficits. Electrical Stimulation: For tough cases, especially those with weak neural drive or minimal conscious contraction. Behavioral & Dietary Therapy: Bladder/bowel retraining, gut-friendly habits, constipation management, and urgency reduction. Manual Therapy & Scar/Soft Tissue Release: To address pelvic pain, scars, and musculoskeletal contributors.",
      },
      {
        title: "Holistic & Integrated Support",
        content:
          "Thorough risk assessment using Wexner or Fecal Incontinence Quality of Life (FIQOL) scales, physician partnership for diagnostics, and close tracking for measurable improvements. Counseling and support for emotional, social, and lifestyle impacts.",
      },
    ],
    treatmentAreas: [
      "Women/men of all ages; postpartum, post-surgical, neurologic, radiation, diabetes, or pelvic injury cases",
      "Recently developed, chronic, or refractory FI",
      "Those who failed standard therapy and want comfort, privacy, and non-surgical solutions",
    ],
    whyChooseUs: [
      "One of Bangalore's very few rPMS UI Chair-equipped pelvic health programs",
      "2025 best-practice, multimodal model: Recognized global standards, no blame, all support",
      "Confidential, compassionate care team: Dignity, hope, and clear progress at every stage",
    ],
    importanceNote:
      "Advanced faecal incontinence rehabilitation using innovative technologies like rPMS UI Chair significantly improves quality of life and functional outcomes. Evidence shows that comprehensive, non-invasive pelvic floor therapy provides superior results for various types of faecal incontinence.",
    ctaMessage:
      "Ready to regain freedom and bowel control? Book a private faecal incontinence assessment at VitalPhysio⁺—Authority for advanced pelvic health and continence restoration.",
  },
  "Sexual health": {
    title:
      "Sexual Health – Advanced Sexual Health and Pelvic Rehab at VitalPhysio⁺ (Including Focus on Erectile Dysfunction)",
    subtitle: "Comprehensive Sexual Health and Erectile Dysfunction Treatment",
    description: `Sexual health concerns—whether pain, arousal difficulties, orgasm concerns, or "performance" issues—can be physiologically rooted, emotionally driven, or both. At VitalPhysio⁺, our integrated pelvic and sexual health program uses the most advanced non-pharmacological strategies, compassionate care, and Bangalore's leading pelvic floor technology for lasting results with privacy and dignity.`,
    highlights: [
      {
        title: "For Women",
        content:
          "Painful intercourse (dyspareunia), vaginismus, arousal/orgasm difficulty, post-surgical/menopausal changes, and pelvic pain. Combined therapies: pelvic floor muscle training (PFMT), biofeedback, relaxation, counseling, and manual therapy—based on APTA and IUGA best practices.",
      },
      {
        title: "For Men",
        content:
          "Erectile dysfunction (ED), premature ejaculation, post-prostatectomy or prostate problems, chronic pelvic pain. Holistic assessment tracks pelvic floor strength, blood flow, nerve function, and contributing emotional/medical factors.",
      },
      {
        title: "rPMS (Repetitive Peripheral Magnetic Stimulation) UI Chair",
        content:
          "rPMS UI Chair delivers focused, painless magnetic pulses to deeply stimulate pelvic floor and perineal muscles (e.g., ischiocavernosus, bulbospongiosus)—dramatically strengthening sexual function, blood flow, and erection quality. Evidence shows: Pelvic floor exercise, alone or with rPMS and biofeedback/electrical stimulation, is highly effective for ED, premature ejaculation, and climacturia (urinary leakage during climax), especially after surgery.",
      },
      {
        title: "Comprehensive Pelvic Floor Rehab for ED",
        content:
          "Pelvic floor muscle exercises: Foundation of non-drug ED therapy, strengthening the muscles critical for erection and ejaculation control. Biofeedback and electrical stimulation: Enhance muscle recruitment, awareness, and results—key for men with poor muscle perception or after surgery. Lifestyle, vascular & aerobic intervention: Walking/resistance training, weight loss, cardiovascular training, and smoking cessation boost nitric oxide and testosterone. Cognitive/behavioral and partner support: Help break anxiety cycles and restore sexual confidence.",
      },
    ],
    treatmentAreas: [
      "Men with mild–moderate ED, post-prostatectomy, or climacturia",
      'Those with chronic pelvic pain, perineal weakness, or "failed" medication/other therapy',
      "Women with dyspareunia, vaginismus, arousal/orgasm difficulties, post-surgical/menopausal changes",
    ],
    whyChooseUs: [
      "Bengaluru center offering rPMS UI Chair and comprehensive pelvic sexual health team",
      "Guideline-driven, compassion-first: Private, evidence-based care for all genders and orientations",
      "Multimodal, measurable results: From pain or dysfunction to renewed intimacy, wellbeing & life participation",
    ],
    importanceNote:
      "Advanced sexual health rehabilitation using innovative technologies and comprehensive pelvic floor therapy significantly improves intimate function and quality of life. Evidence shows that non-pharmacological approaches provide lasting results for various sexual health concerns.",
    ctaMessage:
      "Ready for better sexual health or ED recovery? Book your confidential sexual health assessment at VitalPhysio⁺—Leader in noninvasive pelvic and sexual rehab.",
  },
  "Pelvic pain": {
    title:
      "Pelvic Pain – Pelvic Pain: Restore Comfort, Function & Confidence—Bangalore's Leader in Pelvic Floor Rehab",
    subtitle: "Specialist Pelvic Pain Physiotherapy at VitalPhysio⁺",
    description: `Persistent pelvic pain (pain in the pelvic floor, lower abdomen, hips, groin, or perineum) disrupts daily living, sexual function, and emotional wellbeing. It can result from muscle spasm ("high-tone" pelvic floor dysfunction), nerve irritation, endometriosis, post-surgical changes, bladder/bowel disorders, or unexplained (chronic pain). At VitalPhysio⁺, we address the full spectrum—bringing expert knowledge, specialized technology, and hope.`,
    highlights: [
      {
        title: "Comprehensive Assessment",
        content:
          "Thorough pelvic floor, hip, spine, and abdominal muscle exam—including internal and external assessment as needed. Biopsychosocial model: pain sources, triggers, posture, and behavioral/lifestyle patterns.",
      },
      {
        title: "Manual Therapy & Myofascial Release",
        content:
          "Gentle internal (when indicated) and external techniques, trigger point therapy, scar/adhesion release, and nerve gliding—universally agreed as first-line for most pelvic pain syndromes.",
      },
      {
        title: "Pelvic Floor Muscle Re-education",
        content:
          "Focused on relaxation, down-training, and movement retraining—not just strengthening. This targets abnormal tone/spasm and restores healthy function.",
      },
      {
        title: "Biofeedback & Electrical Stimulation",
        content:
          'Teaches accurate relaxation/contraction and improves body awareness for "stubborn" pelvic floor pain, particularly with dysfunctional patterns.',
      },
      {
        title: "Behavioral & Cognitive Therapy Integration",
        content:
          "Education, pain neuroscience, graded exposure, stress reduction and functional training for long-term progress.",
      },
      {
        title: "rPMS UI Chair & Complementary Modalities",
        content:
          "Used selectively for muscle relaxation, pain control, deep muscle engagement, and for difficult/complex pain cases. Supported with heat/cold, stretching, yoga/relaxation, and digital pain diary tools.",
      },
      {
        title: "Collaborative, Compassionate Team",
        content:
          "Interdisciplinary work with physicians (urology, gyn, GI, pain), psychologist, and sexual health specialists for holistic support.",
      },
    ],
    treatmentAreas: [
      "Vulvodynia/vestibulodynia, endometriosis, IC/bladder pain syndrome, chronic prostatitis or testicular pain, post-surgical or radiation pain, postnatal pain, and coccydynia",
      "Men and women, all ages, all durations—pain, burning, pulling, tightness, or functional disability",
    ],
    whyChooseUs: [
      "Bangalore's leading pelvic pain program: Advanced specialist physios, private supportive setting",
      "Protocol-driven, individualized care: International and 2025 consensus guidelines",
      "Results-focused & holistic: Relief, function, and restored life participation",
    ],
    importanceNote:
      "Evidence-based pelvic pain rehabilitation significantly improves quality of life and functional outcomes. Specialized physiotherapy addressing both physical and psychological aspects of pelvic pain provides superior results compared to single-modality treatments.",
    ctaMessage:
      "Ready to end pelvic pain and reclaim comfort? Book your confidential evaluation at VitalPhysio⁺—the first step to lasting relief and restored wellbeing.",
  },
  "Intimate wellness": {
    title:
      "Intimate Wellness – Intimate Wellness: Empowered Comfort, Confidence & Connection—Specialist Pelvic & Sexual Health Physiotherapy",
    subtitle: "Comprehensive Intimate Wellness Rehabilitation at VitalPhysio⁺",
    description: `Intimate wellness is not just the absence of disease—it's the ability to enjoy pain-free, satisfying, and confident intimacy at every age and stage of life. At VitalPhysio⁺, we believe sexual and pelvic wellbeing are critical to holistic health. Our inclusive, expert program supports all genders and orientations with privacy, dignity, and proven results.`,
    highlights: [
      {
        title: "Expert Pelvic Floor Muscle Training & Rehab",
        content:
          "Addresses tone, strength, endurance, and relaxation—essential for comfort, arousal, orgasm, and control.",
      },
      {
        title: "Biofeedback, rPMS, & Manual Therapies",
        content:
          "Painless, tech-enabled options like rPMS UI Chair (deep pelvic floor activation—especially for sexual dysfunction and post-surgical/women's/men's health), biofeedback for under/overactive muscles, and gentle internal/external release as indicated.",
      },
      {
        title: "Sexual Function Coaching, Cognitive Tools & Education",
        content:
          "Up-to-date, open dialogue about arousal, desire, pain, habit change, and communication. For oncology/menopause, coordinated with medical team to optimize safety and confidence. Guidance in lubricants, dilators, mindfulness/relaxation, and safe touch or device use if desired.",
      },
      {
        title: "Partner & Emotional Wellness Support",
        content:
          "Includes partner strategies, emotional counseling, and support for self-acceptance, relationship enhancement, and intimacy restoration.",
      },
      {
        title: "Inclusive, Lifestyle-Focused Care",
        content:
          "All ages, all orientations. Every session is private, affirming, and nonjudgmental.",
      },
    ],
    treatmentAreas: [
      "Women: Vaginal dryness, painful intercourse, vulvodynia, arousal/orgasm difficulty, post-cancer or hormonal changes, pelvic floor dysfunction, postpartum & menopause",
      "Men: Erectile dysfunction, premature ejaculation, post-prostatectomy recovery, pelvic/perineal pain",
      "All: Anxiety, stress, lack of sexual confidence, relationship or partner intimacy issues",
      "Intimacy pain, loss, worry or dysfunction",
      "Recovery after birth, cancer, medical or surgical changes",
      '"Low libido," anticipation anxiety, or unexplained changes in desire/arousal',
    ],
    whyChooseUs: [
      "Leading sexual & intimate health physio: Pelvic/women's/men's health rehab, rPMS UI Chair, specialists for oncology/postpartum/aging",
      "2025 best-practice, inclusive solutions: Protocols for every body—affirming, evidence-based, and discreet",
      "True partnership: Healing for self, intimacy for partners, confidence for life",
    ],
    importanceNote:
      "Comprehensive intimate wellness rehabilitation significantly improves sexual function, relationship satisfaction, and overall quality of life. Evidence shows that specialized physiotherapy addressing both physical and psychological aspects of intimate health provides superior outcomes.",
    ctaMessage:
      "Ready for more comfortable, confident, and joyful intimacy? Book your private intimate wellness consult at VitalPhysio⁺—Benchmark for sexual and pelvic health.",
  },
  "Remote consultation": {
    title:
      "Remote Consultation – Remote Consultation (Tele-Rehabilitation): Expert Guidance Wherever You Are",
    subtitle:
      "VitalPhysio⁺ Remote Consult: Support for Your Home Exercise Journey",
    description: `VitalPhysio⁺ delivers advanced tele-rehabilitation, combining cutting-edge technology with clinical expertise—so every patient always has support, even outside the clinic. We offer remote consultation for all VitalPhysio⁺ patients, but NO routine home physiotherapy except for select immediate post-surgical patients until they are ambulatory and able to continue recovery at the clinic.`,
    highlights: [
      {
        title: "1:1 Video or Phone Consultation",
        content:
          "Flexible, private, and secure. Sessions are scheduled follow-ups (not first assessments), so your therapist already knows your condition and program.",
      },
      {
        title: "Guided Home Exercise Program (HEP) Support",
        content:
          "Real-time correction on form/position, exercise progression, and daily/lifestyle tips. Digital monitoring, exercise videos, and reminders when appropriate. Collaborative progress review, troubleshooting, and prompt problem-solving.",
      },
      {
        title: "Patient-First Safety & Quality",
        content:
          "All Home & Tele sessions are led by skilled VitalPhysio⁺ therapists, using validated protocols and technology. Initiation home visits for post-surgical patients only—clinic-based therapy will be resumed as soon as patient safely ambulates.",
      },
      {
        title: 'No "one-size-fits-all" tele-therapy',
        content:
          "Your tele-rehab is custom, goal-based, and always tied to your clinic plan—never generic, never solo.",
      },
      {
        title: "Clinic-Integrated, Personalized Care",
        content:
          'Every tele-rehab session is uniquely tailored to your diagnosis, surgical recovery, and stage of rehab. Not a generic "video physio"—these are targeted support sessions, not substitutes for full, hands-on assessment or comprehensive treatment.',
      },
    ],
    treatmentAreas: [
      "Only patients already under care at VitalPhysio⁺ are eligible",
      "Not available as a stand-alone/first consult, or for chronic unsupervised care",
      "Remote/Tele-Consultation for Home Exercise Programs for current patients",
      "Initial post-surgical home visits until patient becomes ambulatory",
    ],
    whyChooseUs: [
      "Continuity and safety: Seamless link between clinic visits and your home efforts—never feel lost or unsupported",
      "Privacy & convenience: Evidence-based, secure, and flexible, guided by your real VitalPhysio⁺ therapist",
      "Fast answers, better outcomes: Keeps you on track for the best possible results",
      "Clinic continuity: Always supervised by a VitalPhysio⁺ therapist who knows you and your rehab journey",
    ],
    importanceNote:
      "Tele-rehabilitation as a complement to in-person care significantly improves adherence to treatment programs and enhances outcomes. Evidence shows that guided remote exercise supervision maintains continuity of care while ensuring safety and effectiveness.",
    ctaMessage:
      "Book your next VitalPhysio⁺ Tele-Rehab Session—staying connected for continuous, confident recovery at home and in the clinic.",
  },
  "Home exercises": {
    title:
      "Home Exercises – Home Exercises: Evidence-Based Extension of Your Clinic Program",
    subtitle:
      "Home Exercise Program (HEP) at VitalPhysio⁺: Empowering Results Beyond the Clinic",
    description: `At VitalPhysio⁺, we believe great outcomes don't stop when you leave the clinic. Our therapists prescribe structured, evidence-based Home Exercise Programs for every patient—ensuring the effort you invest at our center continues to build strength, mobility, and confidence at home.`,
    highlights: [
      {
        title: "Always Evidence-Based & Phase-Matched",
        content:
          "Every home program is built on the same clinical guidelines and global research used at VitalPhysio⁺—matched in difficulty and focus to your recovery phase, whether early, mid, or late-stage. Prescriptions evolve as your clinic therapy progresses (e.g., range-of-motion in early post-op, strength and skill in later stages, endurance and prevention on discharge).",
      },
      {
        title: "Patient-Condition Specific",
        content:
          "No generic exercise sheets. Every HEP is customized for your diagnosis, physical status, pain levels, personal goals, and functional needs. Regular review and real-time adjustment based on your progress, challenges, and therapist feedback.",
      },
      {
        title: "Integrated with In-Clinic Care",
        content:
          'HEPs are never "standalone" or internet-based—they reinforce and build upon the exact techniques, stretches, and strengthening you are already doing (or learning) at VitalPhysio⁺. Your therapist will demonstrate, adjust, and track your exercises, ensuring safety and effectiveness.',
      },
      {
        title: "Digital & Print Options, plus Tele-Rehab Support",
        content:
          "Access home exercises via secure video/app, print handouts, or live tele-rehab guidance—making it easier than ever to stay on track and accountable.",
      },
      {
        title: "Phase-Matched Progression",
        content:
          "Your exercises progress in tandem with your therapy at VitalPhysio⁺—from protecting healing tissue in early stages, to strength and balance as you get stronger, to return-to-activity plans before discharge.",
      },
    ],
    treatmentAreas: [
      "Every VitalPhysio⁺ patient (post-surgical, orthopedic, neuro, pain, pelvic, geriatric, etc.), except where medically contraindicated or explicitly deferred for safety",
      "Condition-Specific HEP addresses your needs: post-surgical rehab, pain management, neurological recovery, mobility, pelvic health, or chronic conditions",
      "Clinic-Therapist Guided: Every HEP is demonstrated and adapted by your therapist with Tele-Rehabilitation support available",
    ],
    whyChooseUs: [
      "Strong evidence shows regular, supervised home exercise improves function, pain, recovery speed, and long-term outcomes across almost all physiotherapy conditions.",
      "Clinic visits may only total a few hours per week—but what you do at home is the foundation for real rehabilitation.",
      "Monitored for Success: Exercises are regularly updated based on your clinic progress, recovery milestones, and feedback.",
    ],
    importanceNote:
      "Consistent, supervised home exercise is proven to speed up recovery, maximize your outcome, and cement gains made at the clinic—even if you only have a few supervised hours per week. Evidence-based home exercise programs are essential for lasting rehabilitation success.",
    ctaMessage:
      "Ready for better results with your next home program? Book your clinical review at VitalPhysio⁺—and supercharge your therapy, wherever you are!",
  },
  "Follow-up care": {
    title:
      "Follow-Up Care – Follow-Up Care: The Bridge to Success—Continuous Support, Lasting Results",
    subtitle: "Personalized Follow-Up at VitalPhysio⁺—Keep Progress on Track",
    description: `Physiotherapy is never "one and done." Regular, planned follow-up care at VitalPhysio⁺ is central to safe, sustainable, and maximal recovery—and gives you the best outcomes from your investment in rehabilitation.`,
    highlights: [
      {
        title: "Progress Review & Re-Assessment",
        content:
          "Every follow-up visit is a checkpoint to measure gains, address setbacks, and make data-driven adjustments to your therapy, home exercise routine, or device usage. Therapists use evidence-based protocols, clinical scales, and your feedback to guide changes—making your care precise and efficient.",
      },
      {
        title: "Dynamic, Personalized Plan Adjustment",
        content:
          "Your follow-up isn't just a check-in; it's a scientific review of what's working, what's not, and what you need next to move forward. All changes—more challenge, new exercises, technique refinement—are tailored to your body's unique healing response and your personal goals.",
      },
      {
        title: "Open Communication & Partnership",
        content:
          "Follow-ups build trust, foster active dialogue, and give space for your questions and concerns. They help you understand your progress and motivate you to maximize adherence between clinic visits, especially with home exercise.",
      },
      {
        title: "Long-Term Success & Prevention",
        content:
          "Even after symptoms resolve, booster follow-ups may be scheduled to ensure relapses are prevented, goals are maintained, and the transition to long-term self-management is smooth.",
      },
      {
        title: "Clinic and Virtual Options",
        content:
          "In-clinic or (when appropriate) tele-review—adapted to your circumstances, needs, and rehab stage. All follow-up protocols are phase-matched and condition-specific, just like the rest of your care at VitalPhysio⁺.",
      },
    ],
    treatmentAreas: [
      "Every patient, every diagnosis—from injury, surgery, pain, neuro, pelvic, or chronic care",
      "Post-discharge, during progressive rehab, or for maintenance/wellness review",
      "All follow-up protocols are phase-matched and condition-specific",
    ],
    whyChooseUs: [
      "Progress Review & Re-Assessment: Data-driven adjustments using evidence-based protocols and clinical scales",
      "Dynamic, Personalized Plan Adjustment: Scientific review tailored to your body's unique healing response",
      "Long-Term Success & Prevention: Booster follow-ups ensure goals are maintained and relapses prevented",
    ],
    importanceNote:
      "Regular, planned follow-up care is central to safe, sustainable, and maximal recovery. Evidence shows that structured follow-up protocols significantly improve long-term outcomes and prevent relapses in physiotherapy patients.",
    ctaMessage:
      "Ready to make your results last? Book your next follow-up at VitalPhysio⁺—and keep moving forward, every step of the way!",
  },
  "Accessibility needs": {
    title:
      "Accessibility Needs – Accessibility Needs: Inclusive Care—Dignity, Independence & Full Participation",
    subtitle: "Making Physiotherapy Truly Accessible at VitalPhysio⁺",
    description: `Every person deserves equal access to high-quality rehab, regardless of ability or disability. At VitalPhysio⁺, accessibility is more than a promise—it's built into every part of your physiotherapy journey.`,
    highlights: [
      {
        title: "Barrier-Free Facilities & Clinic Design",
        content:
          "Fully wheelchair-accessible entrances, restrooms, and treatment areas designed for universal access and comfort.",
      },
      {
        title: "Inclusive, Individualized Care",
        content:
          "Therapists with expertise in neurological and musculoskeletal rehab for physical, intellectual, sensory, and mixed disabilities. Adapted exercise, assistive tech, and mobility aids for people with limb loss, CP, SCI, stroke, amputation, or complex needs. Communication supports: visual materials, easy-read instructions, and translation/interpretation as needed.",
      },
      {
        title: "Technology for Access",
        content:
          "Wearable devices, tele-rehab, motion sensors, and software for customized, consistent therapy—delivering care to those who may find in-person visits challenging at times. Support for digital accessibility—ensuring web/tele-rehab materials are screen-reader friendly, simple, and mobile-optimized.",
      },
      {
        title: "Inclusive, Compassionate Approach",
        content:
          "Clinicians trained in dignity, consent, and empowerment for all bodies, abilities, and backgrounds. Collaborative care plans—always developed with the patient and caregivers, not just for them.",
      },
      {
        title: "Family & Community Engagement",
        content:
          "Accessible education, caregiver training, peer/advocacy links, and close teamwork with local support services and NGOs. Regular review and feedback to update support as needs evolve.",
      },
    ],
    treatmentAreas: [
      "Anyone with a physical/motor impairment, wheelchair requirement, visual or hearing difference, cognitive/intellectual challenge, or chronic health condition",
      "Neurodiverse and complex needs clients",
      "Elderly, pediatric, or post-acute care patients for whom standard pathways don't work",
    ],
    whyChooseUs: [
      "Universal design: Built for universal access, not just minimal compliance",
      "Compassion and capability: Team expertise with rare, severe, and progressive disability",
      "No barriers—only solutions: We strive for full participation and success for every patient",
    ],
    importanceNote:
      "Universal accessibility in healthcare significantly improves outcomes for people with disabilities. Evidence shows that barrier-free environments and inclusive care approaches enhance participation, independence, and quality of life for all patients.",
    ctaMessage:
      "Ready for dignified, barrier-free rehabilitation? Book your accessible care consult at VitalPhysio⁺.",
  },
  // Add more condition details here as needed
};

// --- MAIN PAGE COMPONENT ---

export default function ServicesPage() {
  const [conditionModalData, setConditionModalData] = useState<any>(null);

  // Cal.com integration
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  useEffect(() => {
    if (conditionModalData) {
      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling on body
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [conditionModalData]);

  const handleConditionClick = (condition: string) => {
    setConditionModalData(condition);
  };

  const handleModalClose = () => {
    setConditionModalData(null);
  };

  return (
    <>
      <Head>
        <title>Our Services | VitalPhysio⁺</title>
        <meta
          name="description"
          content="Explore the wide range of physiotherapy and rehabilitation services offered at VitalPhysio⁺ in Bengaluru."
        />
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap");

        :root {
          --vp-blue: #004f8c;
          --vp-teal: #008094;
          --vp-orange: #ec691f;
        }

        .font-lato {
          font-family: "Lato", sans-serif;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Carousel specific styles */
        .carousel-container {
          padding: 40px 0;
        }
        .carousel-card-shadow {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        .carousel-card-shadow:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        /* Modal specific styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }
      `}</style>
      <div className="bg-white font-lato">
        <LandingNavbar />
        <main>
          <AutoCarouselSection onConditionClick={handleConditionClick} />
          <AdvancedTechniquesSection />
          <CTA />
        </main>
        <Footer />
        <AnimatePresence>
          {conditionModalData && (
            <ConditionModal
              data={conditionModalData}
              onClose={handleModalClose}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// --- AUTO CAROUSEL COMPONENT ---

const AutoCarousel = ({
  items,
  onConditionClick,
}: {
  items: any[];
  onConditionClick: (condition: string) => void;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }, 4000); // 4 seconds per slide
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, items.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto carousel-container">
      {/* Main Carousel Container */}
      <div
        className="relative overflow-hidden rounded-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((service, index) => (
            <div key={service.id} className="w-full flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0.8,
                  scale: index === currentSlide ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="mx-2 md:mx-4"
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 border-4 ${service.borderColor} hover:shadow-lg min-h-[600px] flex flex-col`}
                >
                  {/* Enhanced Header */}
                  <div className="relative p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border-3 ${service.borderColor} flex items-center justify-center shadow-md`}
                        >
                          <service.icon
                            className={`w-12 h-12 md:w-14 md:h-14 ${service.iconColor}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                            {service.title}
                          </h3>
                          <div
                            className={`w-16 h-1 ${service.accentColor} rounded-full`}
                          ></div>
                        </div>
                      </div>
                      <div className="text-5xl md:text-6xl opacity-15 ml-4">
                        {service.image}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="px-6 md:px-8 pb-6 md:pb-8 bg-white flex-grow flex flex-col">
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Features (if available) */}
                    {service.features && (
                      <div className="mb-6">
                        <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#EC691F]" />
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features
                            .slice(0, 2)
                            .map((feature: string, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-[#008094] rounded-full mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Conditions - Enhanced Design */}
                    <div className="mb-6 flex-grow">
                      <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#EC691F]" />
                        Conditions We Treat:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.conditions.map(
                          (condition: string, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => onConditionClick(condition)}
                              className={`px-4 py-2.5 ${service.accentColor} text-white text-sm font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-md cursor-pointer transform hover:scale-105 hover:-translate-y-0.5`}
                            >
                              {condition}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Enhanced Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        Service {index + 1} of {items.length}
                      </div>
                      <div
                        className={`px-3 py-1 ${service.accentColor} bg-opacity-10 text-gray-700 text-xs font-medium rounded-full`}
                      >
                        Click conditions above to learn more
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Previous/Next Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#004F8C] transition-colors" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#004F8C] transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-[#004F8C]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            isAutoPlaying
              ? "bg-[#004F8C] text-white hover:bg-[#008094]"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

const AdvancedTechniquesSection = () => {
  // Add this function inside the component
  const handleTechRedirect = (techPath: string) => {
    window.location.href = `/technology${techPath}`;
  };

  return (
    <section className="bg-gradient-to-br from-[var(--vp-teal)] to-[var(--vp-blue)] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Advanced Therapeutic Techniques
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100 max-w-3xl mx-auto px-4"
          >
            We complement core therapies with state-of-the-art modalities to
            accelerate healing and improve outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advancedTechniquesData.map((technique, index) => (
            <motion.div
              key={technique.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group w-full"
            >
              <button
                onClick={() => handleTechRedirect(`#${technique.anchorId}`)}
                className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 min-h-[320px] flex flex-col text-left"
              >
                <div
                  className={`p-4 sm:p-6 bg-white border-b-4 ${technique.borderColor}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-50 border ${technique.borderColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <technique.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${technique.iconColor}`}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[var(--vp-blue)] transition-colors line-clamp-2 leading-tight">
                      {technique.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-white flex-1 flex flex-col">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 flex-1">
                    {technique.description}
                  </p>
                  <div className="flex items-center text-[var(--vp-blue)] font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all mt-auto">
                    Learn More About {technique.title}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const AutoCarouselSection = ({
  onConditionClick,
}: {
  onConditionClick: (condition: string) => void;
}) => (
  <section className="bg-white py-20 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          We offer a complete suite of physiotherapy services, delivered by
          specialists and enhanced by state-of-the-art technology to maximize
          your recovery.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AutoCarousel
          items={coreServicesData}
          onConditionClick={onConditionClick}
        />
      </motion.div>
    </div>
  </section>
);

const ConditionModal = ({
  data,
  onClose,
}: {
  data: string;
  onClose: () => void;
}) => {
  const conditionInfo = conditionDetails[data as keyof typeof conditionDetails];

  if (!conditionInfo) return null;

  // Prevent event propagation for modal content
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  // Extract the main condition name for the program title
  const conditionName = data.charAt(0).toUpperCase() + data.slice(1);

  // Dynamic program titles based on condition
  const getProgramTitle = (condition: string) => {
    switch (condition) {
      case "Joint injuries":
        return "Our Joint Injury Rehabilitation Program Stands Out By Providing:";
      case "Chronic pain":
        return "Why Our Chronic Pain Program Leads in Innovation:";
      case "Muscle strains":
        return "What to Expect from Our Muscle Strain Program:";
      case "Arthritis":
        return "Why Choose Our Arthritis Program?";
      case "Back pain":
        return "What Sets Our Back Pain Program Apart?";
      case "Sports injuries":
        return "Our Unique Approach to Sports Injury Management:";
      case "Performance enhancement":
        return "What Makes Our Performance Enhancement Program Unique?";
      case "Injury prevention":
        return "How We Deliver Superior Injury Prevention:";
      case "Return to sport":
        return "What Makes Our Return to Sport Program the Gold Standard:";
      default:
        return `Our ${conditionName} Program Stands Out By Providing:`;
    }
  };

  // Dynamic CTA messages
  const getCtaMessage = (condition: string) => {
    if (conditionInfo.ctaMessage) {
      return conditionInfo.ctaMessage;
    }

    switch (condition) {
      case "Chronic pain":
        return "Take the next step—regain control, reduce pain, and restore your best life with VitalPhysio⁺. Book your chronic pain assessment today.";
      case "Muscle strains":
        return "Book your assessment—experience tailored care, faster recovery, and lasting results.";
      case "Arthritis":
        return "Take control of your arthritis with a holistic program proven to improve mobility, reduce pain, and enhance life quality. Book your evaluation at VitalPhysio⁺ today!";
      case "Back pain":
        return "Book your back pain assessment for a return to pain-free movement, improved posture, and renewed quality of life.";
      case "Sports injuries":
        return "Get back to top form—book your sports injury assessment at VitalPhysio⁺ and experience the gold standard in recovery.";
      case "Performance enhancement":
        return "Ready to unlock your full potential? Book your performance assessment at VitalPhysio⁺ and take your athletic performance to the next level.";
      default:
        return `Ready to start your ${conditionName.toLowerCase()} recovery? Book your consultation at VitalPhysio⁺ today.`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="modal-overlay fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border-4 border-[#004F8C]"
        onClick={handleModalContentClick}
      >
        {/* Close Button - Fixed position */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors bg-black/20 rounded-full p-3 shadow-lg backdrop-blur-sm z-20"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Scrollable content container */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#004F8C] to-[#008094] text-white p-8 pb-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
              {conditionInfo.title}
            </h2>
            <p className="text-blue-100 text-lg">{conditionInfo.subtitle}</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8 bg-white">
            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {conditionInfo.description}
              </p>
            </div>

            {/* Program Highlights */}
            <div>
              <h3 className="font-bold text-2xl mb-6 text-[#004F8C]">
                {getProgramTitle(data)}
              </h3>
              <div className="space-y-6">
                {conditionInfo.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-3 h-3 bg-[#EC691F] rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Areas */}
            <div>
              <h3 className="font-bold text-2xl mb-4 text-[#004F8C]">
                {data === "Performance enhancement"
                  ? "Who Benefits?"
                  : data === "Injury prevention"
                    ? "Who Needs Injury Prevention?"
                    : data === "Return to sport"
                      ? "Who Needs a Return to Sport Program?"
                      : "Conditions We Treat:"}
              </h3>
              <div className="space-y-3">
                {conditionInfo.treatmentAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="w-3 h-3 bg-[#008094] rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div>
              <h3 className="font-bold text-2xl mb-4 text-[#004F8C]">
                {data === "Return to sport"
                  ? "Why Choose VitalPhysio⁺ for Your Sporting Comeback?"
                  : data === "Injury prevention"
                    ? "Why Choose VitalPhysio⁺ for Injury Prevention?"
                    : data === "Performance enhancement"
                      ? "Why Trust VitalPhysio⁺ for Performance Optimization?"
                      : "What Sets Our Approach Apart?"}
              </h3>
              <div className="space-y-4">
                {conditionInfo.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-3 h-3 bg-[#EC691F] rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-gray-700 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Importance Note */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-[#008094]">
              <h3 className="font-bold text-xl mb-3 text-[#004F8C]">
                Why Early & Specialist-led Rehab Matters:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {conditionInfo.importanceNote}
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#004F8C] to-[#008094] p-8 rounded-xl text-center text-white">
              <h3 className="text-white text-2xl font-bold mb-4">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                {getCtaMessage(data)}
              </p>
              <button
                type="button"
                data-cal-namespace="consultation"
                data-cal-link="vital-physio-plus/consultation"
                data-cal-config='{"layout":"month_view"}'
                className="bg-[#EC691F] text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 text-lg transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- HERO SECTION ---

const ServicesHero = () => (
  <section className="bg-gradient-to-r from-[var(--vp-blue)] to-[var(--vp-teal)] py-12 md:py-16 px-6">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Our Comprehensive Physiotherapy Services
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Empowering your Recovery, Enhancing your Life
        </p>
      </motion.div>
    </div>
  </section>
);
