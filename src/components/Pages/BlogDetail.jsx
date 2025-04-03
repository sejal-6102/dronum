import React from 'react';
import { useParams, Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import PagesHero from '../PagesHero';
import BlogInfo from '../BlogInfo';
import Comments from '../Comments';
import CommentResponce from '../CommentResponce';

// Blog data list
const blogPosts = [
  {
    img: "/assets/img/blog1.png",
    date: "December 04, 2024",
    title: "Master Drone Operations with DGCA-Approved Training and Certification in Jaipur",
"sections": [
      {
        "heading": "Launch Your Drone Career with DGCA-Approved Training in Jaipur",
        "content": "The drone industry is growing at an unprecedented rate, and skilled drone operators are in high demand across sectors such as agriculture, surveying, media production, and many more. At DRONUM India Aviation, we offer a fast and efficient route to becoming a certified drone pilot through our DGCA-approved training program. Our professionally structured course will make you a confident drone operator in just 5 to 7 days, while ensuring that you get high-quality training that is up to the industry's standards."
      },
      {
        "heading": "Fast and Effective Learning",
        "content": "The major advantage of our drone training program is its efficiency. It would be our aim to enable entry to employment to as many students as possible, so our course will be completed within 5 to 7 days; this is suitable for anybody who needs quick access to an introduction to the required skills when piloting a drone. Whether you are a novice or looking to hone your skills, our course will provide you with a holistic learning experience to equip you with the knowledge and hands-on experience to operate drones confidently."
      },
      {
        "heading": "DGCA-Approved Curriculum",
        "content": "Our training curriculum is approved by the Directorate General of Civil Aviation (DGCA), which is the regulatory authority for civil aviation in India. This certification ensures that the training you receive meets the highest standards of the industry and covers all the necessary regulations that ensure the safe and efficient operation of drones. From drone safety protocols to aviation regulations, from flight techniques to real-world applications, this curriculum is comprehensive and includes everything that one needs to be successful in a career in the rapidly growing drone industry."
      },
      {
        "heading": "Practical Flight Training",
        "content": "At DRONUM India Aviation, we believe that the best way to learn is by doing. That's why our course includes extensive practical flight training, where you will operate drones under the guidance of expert instructors. This hands-on experience is essential for building the confidence and skills needed to handle different flying conditions. Learn all key maneuvers, identify the potential issues with an aircraft and understand its operational techniques so as to have smooth and safe flights. Training sessions on drones use state-of-art drone technology and superior quality apparatus. So you receive an update that can never get old. training curriculum is approved by the Directorate General of Civil Aviation (DGCA), which is the regulatory authority for civil aviation in India. This certification ensures that the training you receive meets the highest standards of the industry and covers all the necessary regulations that ensure the safe and efficient operation of drones. From drone safety protocols to aviation regulations, from flight techniques to real-world applications, this curriculum is comprehensive and includes everything that one needs to be successful in a career in the rapidly growing drone industry."
      },
      {
        "heading": "",
        "content": "Our training DGCA recognized Global certification: Completion of our program brings a Remote Pilot Certificate with its DGCA-approved qualification. This certification is recognized internationally. The opportunities that one is able to open before reaching doors in agriculture, construction, film production, and in the surveying professions or whatever else will just widen open with this certification because a need for drone operators does continue to rise. Whether you intend to work with a company offering drone services or you want to launch your business, with the DGCA-approved certificate, your reputation will build, and professional opportunities will widen. is approved by the Directorate General of Civil Aviation (DGCA), which is the regulatory authority for civil aviation in India. This certification ensures that the training you receive meets the highest standards of the industry and covers all the necessary regulations that ensure the safe and efficient operation of drones. From drone safety protocols to aviation regulations, from flight techniques to real-world applications, this curriculum is comprehensive and includes everything that one needs to be successful in a career in the rapidly growing drone industry."
      },
      {
        "heading": "Best Training Location Jaipur",
        "content": "Our training The center for training, located at the heart of Jaipur, Rajasthan, is where aspirant drone pilots go for inspiration in a very vibrant and energetic environment. Rich cultural heritage, a history going thousands of years into the past, and modern infrastructures form an ideal setting for training under these circumstances, making this an interesting place for your journey into drone flying. In terms of enhancing the quality of your learning process, Jaipur will add value to that. recognized Global certification: Completion of our program brings a Remote Pilot Certificate with its DGCA-approved qualification. This certification is recognized internationally. The opportunities that one is able to open before reaching doors in agriculture, construction, film production, and in the surveying professions or whatever else will just widen open with this certification because a need for drone operators does continue to rise. Whether you intend to work with a company offering drone services or you want to launch your business, with the DGCA-approved certificate, your reputation will build, and professional opportunities will widen. is approved by the Directorate General of Civil Aviation (DGCA), which is the regulatory authority for civil aviation in India. This certification ensures that the training you receive meets the highest standards of the industry and covers all the necessary regulations that ensure the safe and efficient operation of drones. From drone safety protocols to aviation regulations, from flight techniques to real-world applications, this curriculum is comprehensive and includes everything that one needs to be successful in a career in the rapidly growing drone industry."
      },
      {
        "heading": "Start Your Drone Career Now",
        "content": "Our The drone industry is going great guns, and it is a great time to start your drone career. DRONUM India Aviation provides you with an intensive, short-term training course, complete with everything that is needed to successfully work as a certified drone operator. You will get all this through DGCA-approved training, hands-on experience while flying, and globally accepted certification for your new drone career. DGCA recognized Global certification: Completion of our program brings a Remote Pilot Certificate with its DGCA-approved qualification. This certification is recognized internationally. The opportunities that one is able to open before reaching doors in agriculture, construction, film production, and in the surveying professions or whatever else will just widen open with this certification because a need for drone operators does continue to rise. Whether you intend to work with a company offering drone services or you want to launch your business, with the DGCA-approved certificate, your reputation will build, and professional opportunities will widen. is approved by the Directorate General of Civil Aviation (DGCA), which is the regulatory authority for civil aviation in India. This certification ensures that the training you receive meets the highest standards of the industry and covers all the necessary regulations that ensure the safe and efficient operation of drones. From drone safety protocols to aviation regulations, from flight techniques to real-world applications, this curriculum is comprehensive and includes everything that one needs to be successful in a career in the rapidly growing drone industry."
      },
      {
        "heading": "",
        "content": "Join our course today and take the step towards mastering the skies. With expert trainers, the best facilities, and a careers-focused approach, we here are to help you work towards your goals and succeed within the fast-growing drone industry."
      }
    ]
  },
  {
    img: "/assets/img/blog2.png",
    date: "November 30, 2024",
    title: "Unlock Your Drone Career with Dronum India Aviation’s RPC Certification Course in Jaipur, Rajasthan",
    "sections": [
      {
        "heading": "DGCA-Unlock Your Drone Career with Dronum India Aviation's RPC Certification Course in Jaipur, Rajasthan Curriculum",
        "content": "Our The drone industry is growing at an incredibly rapid pace, bringing new career opportunities for anyone who has an interest in pursuing a UAV technology career. Dronum India Aviation's Remote Pilot Certificate course is designed to help aspirants achieve success in this emerging field of UAV technology, providing comprehensive skills and certification to them. Whether you want to work in agriculture, surveying, film making, or any other field, our RPC course is the perfect foundation for starting your drone career. curriculum is approved by the Directorate General of Civil Aviation (DGCA), ensuring the highest industry standards..."
      },
      {
        "heading": "Why Dronum India Aviation for Your RPC Course? Flight Training",
        "content": "Dronum India Aviation is at the top of the list in terms of drone training, having a practical and DGCA-approved curriculum for the students to get through and meet all regulatory standards. Our RPC course is so structured that it brings along with it theoretical knowledge as well as hands-on flying experience, hence getting ready for a successful career in a drone operator's certificate."
      },
      {
        "heading": "Course Overview",
        "content": "This RPC certification course is a well-rounded program covering all aspects of drone operations. The following is a breakdown of what you will learn:"
      },
      {
        "heading": "Drone Safety and Regulations",
        "content": "You will understand the safety protocols and regulations that govern drone operations in India, ensuring compliance with DGCA standards."
      },
      {
        "heading": "Course Overview",
        "content": "This RPC certification course is a well-rounded program covering all aspects of drone operations. The following is a breakdown of what you will learn:"
      }
    ]
  },
];

const BlogDetail = () => {
  const { title } = useParams(); // Get blog title from URL

  // Find the blog post that matches the title in the URL
  const selectedPost = blogPosts.find((post) => post.title === decodeURIComponent(title));

  if (!selectedPost) {
    return (
      <>
        <Header />
        <PagesHero img="assets/img/error.jpg" name="Blog Not Found" />
        <div className="container" style={{ textAlign: "center", padding: "50px" }}>
          <h2>Oops! Blog Not Found</h2>
          <p>The blog you are looking for does not exist.</p>
          <Link to="/" className="site-button">Back to Blogs</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <PagesHero img={selectedPost.img} name={selectedPost.title} />
      <BlogInfo post={selectedPost} />
     
      <Footer />
    </>
  );
}

export default BlogDetail;
