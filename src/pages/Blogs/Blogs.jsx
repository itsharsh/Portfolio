import React, { useState, useEffect } from 'react';
import { Grid, Column, SkeletonText } from '@carbon/react';
import { Launch, Catalog, LogoMedium } from '@carbon/icons-react';
import { StyledTile, SectionHeader, Container, theme, ProjectActionBtn } from '../../styles';
import styled from 'styled-components';

const BlogHero = styled.div`
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 2rem;
`;

export const BlogCard = styled(StyledTile)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .main-title {
    font-size: 1.5rem;
    color: ${theme.colors.text};
    margin: 0;
  }

  .issuer {
    font-family: ${theme.fonts.technical};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

function fetchSecureProxy(url) {
  // Uses the GET endpoint to return contents as a string, bypassing any advanced Cloudflare WAF configurations that block the Raw endpoints.
  const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  return fetch(proxy)
    .then(res => res.json())
    .then(data => {
      if (data && data.contents) return JSON.parse(data.contents);
      throw new Error("Invalid proxy payload");
    });
}

// Extracted Medium Articles Component
export const MediumArticles = ({ hideHeader }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@itsharsh')
      .then(res => res.json())
      .then(data => {
        if (data && data.items && data.items.length > 0) {
          setArticles(data.items.slice(0, hideHeader ? 2 : 4));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Medium RSS:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const content = (
    <>
      {loading ? (
        Array.from({ length: hideHeader ? 2 : 4 }).map((_, i) => (
          <Column lg={hideHeader ? 8 : 8} md={8} sm={4} key={i}>
            <BlogCard>
              <SkeletonText heading width="60%" />
              <SkeletonText paragraph width="80%" lineCount={1} />
            </BlogCard>
          </Column>
        ))
      ) : error || articles.length === 0 ? (
        <Column lg={16}>
          <p style={{ color: theme.colors.textMuted }}>Unable to load Medium blogs right now. Please explore them securely on my profile.</p>
          {!hideHeader && (
            <div style={{ marginTop: '1.5rem' }}>
              <ProjectActionBtn $primary href="https://medium.com/@itsharsh" target="_blank" rel="noreferrer">
                Read on Medium
              </ProjectActionBtn>
            </div>
          )}
        </Column>
      ) : (
        articles.map((article, i) => (
          <Column lg={hideHeader ? 8 : 8} md={8} sm={4} key={i} style={{ marginBottom: '2rem' }}>
            <BlogCard>
              <LogoMedium size={32} style={{ fill: theme.colors.text, marginBottom: '1rem' }} />
              <div className="title-row">
                <h3 className="main-title">{article.title}</h3>
                <a href={article.link} target="_blank" rel="noreferrer">
                  <Launch size={24} style={{ fill: theme.colors.primary }} />
                </a>
              </div>
              <div className="issuer">Medium • {new Date(article.pubDate).toLocaleDateString()}</div>
            </BlogCard>
          </Column>
        ))
      )}
    </>
  );

  if (hideHeader) return content;

  return (
    <>
      <SectionHeader className="fade-in" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Medium Blogs</SectionHeader>
      <Grid>
        {content}
      </Grid>
    </>
  );
};

export const GFGArticles = ({ hideHeader }) => {
  const [gfgBlogs, setGfgBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSecureProxy('https://communityapi.geeksforgeeks.org/post/user/itsharsh/?fetch_type=posts&page=1')
      .then(data => {
        if (data && data.results) {
          setGfgBlogs(data.results.slice(0, hideHeader ? 2 : 4)); 
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching GFG blogs via robust proxy:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const content = (
    <>
      {loading ? (
        Array.from({ length: hideHeader ? 2 : 4 }).map((_, i) => (
          <Column lg={hideHeader ? 8 : 4} md={4} sm={4} key={i}>
            <BlogCard style={{ minHeight: '120px' }}>
              <SkeletonText heading width="60%" />
              <SkeletonText paragraph width="40%" lineCount={1} />
            </BlogCard>
          </Column>
        ))
      ) : error || gfgBlogs.length === 0 ? (
        <Column lg={16}>
          <p style={{ color: theme.colors.textMuted }}>Unable to load blogs directly. Please visit the GeeksforGeeks profile.</p>
        </Column>
      ) : (
        gfgBlogs.map((blog, i) => (
          <Column lg={hideHeader ? 8 : 4} md={4} sm={4} key={i} style={{ marginBottom: '2rem' }}>
            <BlogCard style={{ justifyContent: 'center' }}>
              <div className="title-row" style={{ marginBottom: '0.5rem' }}>
                <h3 className="main-title" style={{ fontSize: '1.25rem' }}>{blog.title}</h3>
                <a href={blog.url || `https://www.geeksforgeeks.org/${blog.slug}`} target="_blank" rel="noreferrer">
                  <Launch size={20} style={{ fill: theme.colors.primary }} />
                </a>
              </div>
              <div className="issuer" style={{ marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                Published: {new Date(blog.published_date || Date.now()).toLocaleDateString()}
              </div>
            </BlogCard>
          </Column>
        ))
      )}
    </>
  );

  if (hideHeader) return content;

  return (
    <>
      <SectionHeader className="fade-in" style={{ fontSize: '2rem', marginBottom: '2rem' }}>GeeksforGeeks Blogs</SectionHeader>
      <Grid>
        {content}
      </Grid>
    </>
  );
};

export const MentorshipFeedbacks = () => {
  const [gfgReviews, setGfgReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let allFeedbacks = [];

    const fetchRecursively = (pageUrl) => {
      fetchSecureProxy(pageUrl)
        .then(data => {
          if (data && data.results) {
            allFeedbacks = [...allFeedbacks, ...data.results];
            
            // Render incrementally immediately to prevent UI blocking while deep pagination continues
            processFeedbacksProgressively(allFeedbacks);

            if (data.next) {
              const nextUrl = data.next.replace('http://', 'https://');
              fetchRecursively(nextUrl);
            }
          } else {
            if (allFeedbacks.length === 0) {
              setError(true);
              setLoading(false);
            }
          }
        })
        .catch(err => {
           console.error("Deep pagination proxy failed:", err);
           if (allFeedbacks.length === 0) {
              setError(true);
              setLoading(false);
           }
        });
    };

    const processFeedbacksProgressively = (feedbacks) => {
      const validReviews = feedbacks.filter(r => r.text && r.text.trim().length > 0).slice(0, 5);
      setGfgReviews(validReviews);

      const ratedItems = feedbacks.filter(r => typeof r.rating === 'number');
      if (ratedItems.length > 0) {
         const avg = ratedItems.reduce((acc, curr) => acc + curr.rating, 0) / ratedItems.length;
         setRating(avg.toFixed(1));
      }
      setLoading(false);
    };

    fetchRecursively('https://connectapi.geeksforgeeks.org/mentor/feedbacks/itsharsh/?page=1');
  }, []);

  return (
    <div style={{ marginTop: '0rem' }}>
      <SectionHeader className="fade-in" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Mentorship Feedback</SectionHeader>
      <div className="fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', backgroundColor: theme.colors.surfaceTonal, padding: '0.5rem 1rem', borderRadius: '4px' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 600, color: theme.colors.text }}>⭐ {rating || "..."}/5</span>
        <span style={{ color: theme.colors.textMuted, fontSize: '0.9rem', fontFamily: theme.fonts.technical }}>overall rating on GeeksforGeeks Connect</span>
      </div>
      <Grid>
        {loading ? (
             Array.from({ length: 4 }).map((_, i) => (
              <Column lg={5} md={4} sm={4} key={i}>
                <StyledTile style={{ height: '100%' }}>
                  <SkeletonText paragraph width="100%" lineCount={4} />
                </StyledTile>
              </Column>
            ))
        ) : error || gfgReviews.length === 0 ? (
          <Column lg={16}>
             <p style={{ color: theme.colors.textMuted }}>Mentorship feedback cannot be loaded securely via remote proxy at the moment.</p>
          </Column>
        ) : (
          gfgReviews.map((review, i) => (
            <Column lg={5} md={4} sm={4} key={i} style={{ marginBottom: '2rem' }}>
              <StyledTile style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} style={{ color: idx < review.rating ? theme.colors.primary : theme.colors.border }}>★</span>
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', color: theme.colors.textMuted, lineHeight: '1.6', fontSize: '1rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                  "{review.text}"
                </p>
                <div style={{ fontFamily: theme.fonts.technical, fontSize: '0.85rem', color: theme.colors.text, textTransform: 'uppercase' }}>
                  - {review.learner_name || "Mentee"}
                </div>
              </StyledTile>
            </Column>
          ))
        )}
      </Grid>
    </div>
  );
};

const Blogs = ({ user }) => {
  return (
    <Container className="fade-in">
      <BlogHero>
        <SectionHeader style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Blogs
        </SectionHeader>
        <p style={{ fontSize: '1.25rem', color: theme.colors.textMuted, maxWidth: '600px' }}>
          Thoughts, tutorials, and insights shared across Medium and GeeksforGeeks, along with professional publications.
        </p>
      </BlogHero>

      <div style={{ marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <ProjectActionBtn $primary href="https://medium.com/@itsharsh" target="_blank" rel="noreferrer">
          <Launch size={20} />
          View Medium Profile
        </ProjectActionBtn>
        <ProjectActionBtn href="https://www.geeksforgeeks.org/profile/itsharsh/?tab=posts" target="_blank" rel="noreferrer">
          <Launch size={20} />
          View GFG Profile
        </ProjectActionBtn>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <MediumArticles />
      </div>

      <GFGArticles />
      
      <div style={{ marginTop: '4rem', marginBottom: '3rem' }}>
        <MentorshipFeedbacks />
      </div>

      {user?.publications && user.publications.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <SectionHeader className="fade-in" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Publications</SectionHeader>
          <Grid>
            {user.publications.map((pub, idx) => (
              <Column lg={8} md={8} sm={4} key={idx} style={{ marginBottom: '2rem' }}>
                <BlogCard>
                  <Catalog size={32} style={{ fill: theme.colors.secondary, marginBottom: '1rem' }} />
                  <div className="title-row">
                    <h3 className="main-title">{pub.name}</h3>
                    {pub.url || pub.website ? (
                      <a href={pub.url || pub.website} target="_blank" rel="noreferrer">
                        <Launch size={24} style={{ fill: theme.colors.primary }} />
                      </a>
                    ) : null}
                  </div>
                  <div className="issuer">{pub.publisher} • {pub.releaseDate && pub.releaseDate.substring(0, 4)}</div>
                  <p style={{ color: theme.colors.textMuted, lineHeight: '1.6', flexGrow: 1 }}>{pub.summary}</p>
                </BlogCard>
              </Column>
            ))}
          </Grid>
        </div>
      )}

    </Container>
  );
};

export default Blogs;
