import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../../components/Contact";
import "./Community.css";

interface Category {
  createdAt: string;
  description: string | null;
  documentId: string;
  id: number;
  name: string;
  publishedAt: string;
  updatedAt: string;
}

interface BlogPost {
  id: number;
  content: string;
  createdAt: string;
  documentId: string;
  gallery_image: null | any;
  main_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    url: string;
  } | null;
  show_main: boolean;
  title: string;
  updatedAt: string;
  publishedAt: string;
  category: Category;
}

const Society = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  // Mock company info
  const companyInfo = {
    name: "The Excellent Communication",
    phone: "02-102-2580",
    address:
      "2922 อาคารสำนักงาน ชั้น 14 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310",
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching all blog posts...");
        const url = `${apiUrl}/api/blog-posts?populate=*`;
        console.log("API URL:", url);

        const response = await fetch(url);
        const data = await response.json();

        console.log("Raw API Response:", data);

        if (data.data && Array.isArray(data.data)) {
          // แสดงข้อมูลดิบทั้งหมดก่อน
          console.log("All raw posts:", JSON.stringify(data.data, null, 2));

          // แสดงข้อมูลแต่ละโพสต์แบบละเอียด
          data.data.forEach((item: any, index: number) => {
            console.log(`\nPost ${index + 1} details:`, {
              id: item.id,
              title: item.title,
              content: item.content,
              category: item.category?.name,
              main_image: item.main_image,
              show_main: item.show_main,
              documentId: item.documentId,
            });
          });

          // ตรวจสอบโพสต์ที่เป็น society
          const societyPosts = data.data.filter(
            (item: any) => item.category?.name?.toLowerCase() === "society"
          );

          console.log("\nSociety posts:", societyPosts);
          setPosts(societyPosts);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [apiUrl]);

  // Log when posts state changes
  useEffect(() => {
    console.log("Current posts state:", posts);
  }, [posts]);

  const handlePostClick = (documentId: string) => {
    navigate(`/blog/doc/${documentId}`);
  };

  return (
    <>
      <div className="community-container">
        <div className="community-header">
          <h1>SOCIETY</h1>
        </div>

        <div className="events-grid">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : posts.length === 0 ? (
            <div className="no-posts">No society activities found</div>
          ) : (
            posts.map((post, index) => (
              <div
                key={post.id}
                className={`event-card ${index % 2 === 0 ? "left" : "right"}`}
                onClick={() => handlePostClick(post.documentId)}
                style={{ cursor: "pointer" }}
              >
                <div className="event-content">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
                {post.main_image && (
                  <div className="event-image-container">
                    <img
                      src={`${apiUrl}${post.main_image.url}`}
                      alt={post.main_image.alternativeText || post.title}
                      className="event-image"
                      onError={(e) => {
                        console.error("Image failed to load:", e);
                        e.currentTarget.src = "/placeholder.jpg";
                      }}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="w100 text-center">
          <button className="more-btn ">
            <span>More from our page</span>
          </button>
        </div> 
      </div>
      <Contact />
    </>
  );
};

export default Society;
