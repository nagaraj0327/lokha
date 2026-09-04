import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Services from '../pages/Services';
import Mentors from '../pages/Mentors';
import Investors from '../pages/Investors';
import EventDetail from '../pages/EventDetail';
import Events from '../pages/Events';
import Community from '../pages/Community';
import Careers from '../pages/Careers';
import Partners from '../pages/Partners';
import Blog from '../pages/Blog';
import FAQs from '../pages/FAQs';
import Contact from '../pages/Contact';
import Apply from '../pages/Apply';
import ProgramApply from '../pages/ProgramApply';
import ConsultantApply from '../pages/ConsultantApply';
import MentorApply from '../pages/MentorApply';
import InvestorApply from '../pages/InvestorApply';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/:programId" element={<ProgramApply />} />
        <Route path="/become-a-consultant" element={<ConsultantApply />} />
        <Route path="/become-a-mentor" element={<MentorApply />} />
        <Route path="/become-an-investor" element={<InvestorApply />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
