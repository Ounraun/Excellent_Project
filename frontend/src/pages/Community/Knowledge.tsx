import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import "./Knowledge.css";

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

const Knowledge = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

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

          // ตรวจสอบโพสต์ที่เป็น knowledge
          const knowledgePosts = data.data.filter(
            (item: any) => item.category?.name?.toLowerCase() === "knowledge"
          );

          console.log("\nKnowledge posts:", knowledgePosts);
          setPosts(knowledgePosts);
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

  // Mock data for AI trends cards
  const aiTrendCards =
    posts.length > 0
      ? posts
      : Array(9).fill({
          title: "5 เทรนด์ AI",
          subtitle: "ยกเวลว์ให้ธุรกิจปีนี้ 2025",
          description: "5 AI Trends Shaping Businesses in 2025",
          readMoreText: "Read more »",
        });

  return (
    <>
      <div className="knowledge-container">
        <h1>KNOWLEDGE</h1>
        {/* Header Section */}
        <div className="knowledge-top-section">
          <div className="knowledge-header">
            <p className="knowledge-subtitle">
              Latest contents for What / Why / For
              <br />
              make we have the experts,
              <br />
              the company showing any part of work
            </p>
            <button className="more-knowledge-btn">
              More knowledge
              <span className="btn-subtitle">click to read all knowledge</span>
            </button>
          </div>
          <div className="video-container">
            <div className="video-placeholder">
              <img src="/path-to-video-thumbnail.jpg" alt="Video thumbnail" />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>

        {/* AI Trends Grid */}
        <div className="trends-grid">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : posts.length === 0 ? (
            <div className="no-posts">No knowledge posts found</div>
          ) : (
            posts.map((post, index) => (
              <div key={post.id} className="trend-card">
                {post.main_image && (
                  <img
                    src={`${apiUrl}${post.main_image.url}`}
                    alt={post.main_image.alternativeText || post.title}
                    className="card-image"
                    onError={(e) => {
                      console.error("Image failed to load:", e);
                      e.currentTarget.src = "/placeholder.jpg";
                    }}
                  />
                )}
                <div className="card-content">
                  <div className="card-bottom">
                    <h3>{post.title}</h3>
                    <h4>{post.category?.name}</h4>
                    <p>{post.content}</p>
                    <Link
                      to={`/community/knowledge/doc/${post.documentId}`}
                      className="read-more"
                    >
                      Read more »
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Knowledge;
