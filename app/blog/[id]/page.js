"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogPosts = {
  "react-interview-questions-2025": {
    title: "Top 10 React Interview Questions for 2025",
    date: "Jan 15, 2025",
    category: "React",
    readTime: "8 min read",
    author: "Sarah Chen",
    content: `
      <h2>Introduction</h2>
      <p>React continues to be one of the most in-demand skills for frontend developers. Here are the top 10 questions you should master for your next React interview.</p>
      
      <h2>1. What is the Virtual DOM?</h2>
      <p>The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by comparing the virtual DOM with the real DOM and only updating what has changed. This process is called reconciliation.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li>Improved performance through batch updates</li>
        <li>Efficient diffing algorithm</li>
        <li>Minimizes direct DOM manipulation</li>
      </ul>
      
      <h2>2. What are React Hooks?</h2>
      <p>Hooks are functions that let you use state and other React features in functional components. The most common hooks are:</p>
      <ul>
        <li><strong>useState</strong> - Manages component state</li>
        <li><strong>useEffect</strong> - Handles side effects</li>
        <li><strong>useContext</strong> - Accesses context values</li>
        <li><strong>useRef</strong> - Creates mutable references</li>
      </ul>
      
      <h2>3. Explain useEffect and its cleanup function</h2>
      <p>useEffect runs side effects after render. The cleanup function prevents memory leaks by cleaning up subscriptions, timers, or event listeners.</p>
      
      <pre><code>useEffect(() => {
  const timer = setInterval(() => {
    console.log('Running...');
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup
}, []);</code></pre>
      
      <h2>4. What is the difference between controlled and uncontrolled components?</h2>
      <p><strong>Controlled components</strong> have their state managed by React through props and state. <strong>Uncontrolled components</strong> manage their own state internally using refs.</p>
      
      <h2>5. What is prop drilling and how do you avoid it?</h2>
      <p>Prop drilling occurs when you pass props through multiple levels of components. Solutions include:</p>
      <ul>
        <li>Context API</li>
        <li>State management libraries (Redux, Zustand)</li>
        <li>Component composition</li>
      </ul>
      
      <h2>6. Explain React's reconciliation algorithm</h2>
      <p>React uses a diffing algorithm to compare the new virtual DOM with the previous one. It identifies changes and updates only the necessary parts of the real DOM.</p>
      
      <h2>7. What are Higher-Order Components (HOCs)?</h2>
      <p>HOCs are functions that take a component and return a new component with additional props or functionality. They're used for code reuse and logic abstraction.</p>
      
      <h2>8. What is React.memo() and when should you use it?</h2>
      <p>React.memo() is a higher-order component that memoizes a component, preventing unnecessary re-renders when props haven't changed. Use it for expensive components that render often with the same props.</p>
      
      <h2>9. Explain the useCallback and useMemo hooks</h2>
      <p><strong>useCallback</strong> memoizes functions to prevent recreation on every render. <strong>useMemo</strong> memoizes computed values to avoid expensive calculations.</p>
      
      <h2>10. What are React Portals?</h2>
      <p>Portals provide a way to render children into a DOM node outside the parent component's hierarchy. They're commonly used for modals, tooltips, and dropdowns.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these concepts will significantly improve your chances in React interviews. Practice implementing these patterns in real projects to solidify your understanding.</p>
    `
  },
  "sql-joins-explained": {
    title: "SQL Joins Explained with Real Examples",
    date: "Jan 12, 2025",
    category: "SQL",
    readTime: "6 min read",
    author: "Michael Rodriguez",
    content: `
      <h2>Understanding SQL Joins</h2>
      <p>SQL joins are fundamental to working with relational databases. Let's explore each type with practical examples.</p>
      
      <h2>1. INNER JOIN</h2>
      <p>Returns only the rows where there's a match in both tables.</p>
      
      <pre><code>SELECT employees.name, departments.dept_name
FROM employees
INNER JOIN departments ON employees.dept_id = departments.id;</code></pre>
      
      <h3>Use Case:</h3>
      <p>When you only want records that exist in both tables, like finding all employees who are assigned to a department.</p>
      
      <h2>2. LEFT JOIN (LEFT OUTER JOIN)</h2>
      <p>Returns all rows from the left table and matching rows from the right table. If no match, NULL values are returned for right table columns.</p>
      
      <pre><code>SELECT customers.name, orders.order_id
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;</code></pre>
      
      <h3>Use Case:</h3>
      <p>Finding all customers, including those who haven't placed any orders yet.</p>
      
      <h2>3. RIGHT JOIN (RIGHT OUTER JOIN)</h2>
      <p>Returns all rows from the right table and matching rows from the left table.</p>
      
      <pre><code>SELECT orders.order_id, customers.name
FROM orders
RIGHT JOIN customers ON orders.customer_id = customers.id;</code></pre>
      
      <h2>4. FULL OUTER JOIN</h2>
      <p>Returns all rows when there's a match in either table. Combines LEFT and RIGHT joins.</p>
      
      <pre><code>SELECT employees.name, projects.project_name
FROM employees
FULL OUTER JOIN projects ON employees.id = projects.employee_id;</code></pre>
      
      <h2>5. CROSS JOIN</h2>
      <p>Returns the Cartesian product of both tables - every row from the first table combined with every row from the second table.</p>
      
      <pre><code>SELECT products.name, colors.color_name
FROM products
CROSS JOIN colors;</code></pre>
      
      <h2>6. SELF JOIN</h2>
      <p>A table is joined with itself, useful for hierarchical data.</p>
      
      <pre><code>SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;</code></pre>
      
      <h2>Performance Tips</h2>
      <ul>
        <li>Always index foreign key columns</li>
        <li>Use INNER JOIN when possible (fastest)</li>
        <li>Avoid CROSS JOIN on large tables</li>
        <li>Consider using EXISTS instead of IN with subqueries</li>
      </ul>
      
      <h2>Common Interview Questions</h2>
      <p><strong>Q: What's the difference between WHERE and HAVING?</strong></p>
      <p>WHERE filters rows before grouping, HAVING filters after grouping with aggregate functions.</p>
      
      <p><strong>Q: Can you join more than two tables?</strong></p>
      <p>Yes! Chain multiple JOIN clauses to combine multiple tables.</p>
      
      <h2>Practice Exercise</h2>
      <p>Try writing a query that finds all orders with customer names and product details, including orders without products (hint: use multiple joins).</p>
    `
  },
  "python-best-practices": {
    title: "Python Best Practices for Technical Interviews",
    date: "Jan 10, 2025",
    category: "Python",
    readTime: "10 min read",
    author: "Emily Zhang",
    content: `
      <h2>Writing Clean Python Code</h2>
      <p>Interviewers don't just evaluate if your code works—they assess code quality, readability, and Pythonic practices.</p>
      
      <h2>1. Follow PEP 8 Style Guide</h2>
      <ul>
        <li>Use 4 spaces for indentation</li>
        <li>Limit lines to 79 characters</li>
        <li>Use snake_case for functions and variables</li>
        <li>Use PascalCase for class names</li>
      </ul>
      
      <pre><code># Good
def calculate_total_price(items):
    return sum(item.price for item in items)

# Avoid
def CalculateTotalPrice(Items):
    return sum([item.price for item in Items])</code></pre>
      
      <h2>2. Use List Comprehensions Wisely</h2>
      <p>List comprehensions are Pythonic but don't sacrifice readability.</p>
      
      <pre><code># Good - Clear and concise
squares = [x**2 for x in range(10) if x % 2 == 0]

# Avoid - Too complex
result = [x**2 if x % 2 == 0 else x**3 for x in range(10) if x > 0]</code></pre>
      
      <h2>3. Leverage Built-in Functions</h2>
      <p>Python's built-ins are optimized and show you know the language.</p>
      
      <pre><code># Good
total = sum(numbers)
maximum = max(numbers)
unique = set(numbers)

# Avoid reinventing the wheel
total = 0
for num in numbers:
    total += num</code></pre>
      
      <h2>4. Use Enumerate Instead of Range(len())</h2>
      <pre><code># Good
for i, item in enumerate(items):
    print(f"Item {i}: {item}")

# Avoid
for i in range(len(items)):
    print(f"Item {i}: {items[i]}")</code></pre>
      
      <h2>5. Handle Exceptions Properly</h2>
      <pre><code># Good
try:
    result = risky_operation()
except ValueError as e:
    logger.error(f"Invalid value: {e}")
    return None
except Exception as e:
    logger.error(f"Unexpected error: {e}")
    raise

# Avoid bare except
try:
    result = risky_operation()
except:
    pass</code></pre>
      
      <h2>6. Use Context Managers</h2>
      <pre><code># Good
with open('file.txt', 'r') as f:
    data = f.read()

# Avoid
f = open('file.txt', 'r')
data = f.read()
f.close()</code></pre>
      
      <h2>7. Write Efficient Code</h2>
      <ul>
        <li>Use sets for membership testing (O(1) vs O(n))</li>
        <li>Use dict.get() instead of checking if key exists</li>
        <li>Use generators for large datasets</li>
        <li>Avoid repeated string concatenation in loops</li>
      </ul>
      
      <pre><code># Good - O(1) lookup
valid_ids = {1, 2, 3, 4, 5}
if user_id in valid_ids:
    process_user()

# Avoid - O(n) lookup
valid_ids = [1, 2, 3, 4, 5]
if user_id in valid_ids:
    process_user()</code></pre>
      
      <h2>8. Use Type Hints</h2>
      <pre><code>def calculate_discount(price: float, discount: float) -> float:
    return price * (1 - discount)</code></pre>
      
      <h2>9. Document Your Code</h2>
      <pre><code>def binary_search(arr: list[int], target: int) -> int:
    """
    Perform binary search on a sorted array.
    
    Args:
        arr: Sorted list of integers
        target: Value to search for
        
    Returns:
        Index of target if found, -1 otherwise
    """
    left, right = 0, len(arr) - 1
    # Implementation...</code></pre>
      
      <h2>10. Common Interview Patterns</h2>
      <ul>
        <li>Two pointers technique</li>
        <li>Sliding window</li>
        <li>Hash maps for O(1) lookups</li>
        <li>Collections module (Counter, defaultdict, deque)</li>
      </ul>
      
      <h2>Final Tips</h2>
      <p>Always discuss your approach before coding, explain your time/space complexity, and test your code with edge cases.</p>
    `
  },
  "system-design-interviews": {
    title: "How to Prepare for System Design Interviews",
    date: "Jan 8, 2025",
    category: "System Design",
    readTime: "12 min read",
    author: "David Kumar",
    content: `
      <h2>Mastering System Design Interviews</h2>
      <p>System design interviews assess your ability to build scalable, reliable systems. Here's a comprehensive guide to ace them.</p>
      
      <h2>The Framework: RESHADED</h2>
      <p>Follow this systematic approach:</p>
      <ul>
        <li><strong>R</strong>equirements - Clarify functional and non-functional requirements</li>
        <li><strong>E</strong>stimations - Calculate scale, storage, bandwidth</li>
        <li><strong>S</strong>torage - Choose appropriate databases</li>
        <li><strong>H</strong>igh-level design - Draw the architecture</li>
        <li><strong>A</strong>PI design - Define key endpoints</li>
        <li><strong>D</strong>etailed design - Deep dive into components</li>
        <li><strong>E</strong>valuation - Discuss trade-offs</li>
        <li><strong>D</strong>iscuss bottlenecks and solutions</li>
      </ul>
      
      <h2>Step 1: Clarify Requirements (5 minutes)</h2>
      <h3>Functional Requirements:</h3>
      <ul>
        <li>What are the core features?</li>
        <li>Who are the users?</li>
        <li>What are the main use cases?</li>
      </ul>
      
      <h3>Non-Functional Requirements:</h3>
      <ul>
        <li>Availability vs Consistency (CAP theorem)</li>
        <li>Latency requirements</li>
        <li>Scale (DAU, QPS, storage)</li>
      </ul>
      
      <h2>Step 2: Back-of-Envelope Estimations (5 minutes)</h2>
      <p>Example: Design Twitter</p>
      <pre><code>Daily Active Users: 200M
Tweets per day: 100M
Read:Write ratio: 100:1
Storage per tweet: ~300 bytes
Daily storage: 100M * 300 bytes = 30GB/day
Annual storage: 30GB * 365 = ~11TB/year</code></pre>
      
      <h2>Step 3: High-Level Design (10 minutes)</h2>
      <p>Start with basic components:</p>
      <ul>
        <li>Load Balancer</li>
        <li>Application Servers</li>
        <li>Database (SQL/NoSQL)</li>
        <li>Cache (Redis/Memcached)</li>
        <li>CDN for static content</li>
        <li>Message Queue for async tasks</li>
      </ul>
      
      <h2>Step 4: Database Design</h2>
      <h3>When to use SQL:</h3>
      <ul>
        <li>Complex queries and joins</li>
        <li>ACID transactions required</li>
        <li>Structured data with relationships</li>
      </ul>
      
      <h3>When to use NoSQL:</h3>
      <ul>
        <li>Massive scale (billions of records)</li>
        <li>Flexible schema</li>
        <li>High write throughput</li>
        <li>Key-value or document storage</li>
      </ul>
      
      <h2>Step 5: Deep Dive (15 minutes)</h2>
      <h3>Caching Strategy:</h3>
      <ul>
        <li>Cache-aside (lazy loading)</li>
        <li>Write-through cache</li>
        <li>Write-behind cache</li>
      </ul>
      
      <h3>Scaling Strategies:</h3>
      <ul>
        <li>Vertical scaling (scale up)</li>
        <li>Horizontal scaling (scale out)</li>
        <li>Database sharding</li>
        <li>Read replicas</li>
      </ul>
      
      <h2>Common Design Patterns</h2>
      
      <h3>1. Rate Limiting</h3>
      <p>Algorithms: Token bucket, Leaky bucket, Fixed window, Sliding window</p>
      
      <h3>2. Consistent Hashing</h3>
      <p>Distribute data across servers while minimizing redistribution when servers are added/removed.</p>
      
      <h3>3. Message Queues</h3>
      <p>Decouple services and handle async processing (Kafka, RabbitMQ, SQS)</p>
      
      <h3>4. Microservices</h3>
      <p>Break monolith into independent services with their own databases.</p>
      
      <h2>Key Concepts to Master</h2>
      <ul>
        <li>CAP Theorem (Consistency, Availability, Partition Tolerance)</li>
        <li>Load Balancing (Round Robin, Least Connections, IP Hash)</li>
        <li>Database Indexing</li>
        <li>Replication (Master-Slave, Master-Master)</li>
        <li>CDN and Edge Computing</li>
        <li>Monitoring and Logging</li>
      </ul>
      
      <h2>Common Interview Questions</h2>
      <ul>
        <li>Design URL Shortener (like bit.ly)</li>
        <li>Design Twitter/Instagram Feed</li>
        <li>Design YouTube/Netflix</li>
        <li>Design Uber/Lyft</li>
        <li>Design WhatsApp/Messenger</li>
        <li>Design Rate Limiter</li>
        <li>Design Web Crawler</li>
      </ul>
      
      <h2>Resources to Study</h2>
      <ul>
        <li>System Design Interview by Alex Xu</li>
        <li>Designing Data-Intensive Applications by Martin Kleppmann</li>
        <li>Practice on platforms like SystemsExpert, Educative</li>
      </ul>
      
      <h2>Interview Tips</h2>
      <ul>
        <li>Think out loud - explain your reasoning</li>
        <li>Ask clarifying questions</li>
        <li>Start simple, then iterate</li>
        <li>Discuss trade-offs</li>
        <li>Be honest about what you don't know</li>
        <li>Practice drawing diagrams</li>
      </ul>
    `
  },
  "behavioral-interview-tips": {
    title: "Behavioral Interview Tips from FAANG Engineers",
    date: "Jan 5, 2025",
    category: "Career",
    readTime: "7 min read",
    author: "Jessica Park",
    content: `
      <h2>Mastering Behavioral Interviews</h2>
      <p>Technical skills get you the interview, but behavioral skills get you the job. Here's how FAANG engineers prepare.</p>
      
      <h2>The STAR Method</h2>
      <p>Structure every answer using STAR:</p>
      <ul>
        <li><strong>S</strong>ituation - Set the context</li>
        <li><strong>T</strong>ask - Explain the challenge</li>
        <li><strong>A</strong>ction - Describe what YOU did</li>
        <li><strong>R</strong>esult - Share the outcome with metrics</li>
      </ul>
      
      <h3>Example: "Tell me about a time you faced a difficult bug"</h3>
      <p><strong>Situation:</strong> "During a production deployment, users reported a 30% increase in page load times."</p>
      <p><strong>Task:</strong> "I was responsible for identifying and fixing the performance issue within 24 hours."</p>
      <p><strong>Action:</strong> "I used Chrome DevTools to profile the application, identified an N+1 query problem, implemented database query optimization with eager loading, and added caching for frequently accessed data."</p>
      <p><strong>Result:</strong> "Page load times decreased by 45%, and we prevented potential customer churn. I also documented the solution and created monitoring alerts to catch similar issues early."</p>
      
      <h2>Common Behavioral Questions</h2>
      
      <h3>Leadership & Influence</h3>
      <ul>
        <li>Tell me about a time you led a project</li>
        <li>Describe a situation where you had to influence others</li>
        <li>How do you handle disagreements with teammates?</li>
      </ul>
      
      <h3>Problem Solving</h3>
      <ul>
        <li>Tell me about a complex problem you solved</li>
        <li>Describe a time you failed and what you learned</li>
        <li>How do you approach ambiguous problems?</li>
      </ul>
      
      <h3>Collaboration</h3>
      <ul>
        <li>Tell me about a time you worked with a difficult person</li>
        <li>Describe a successful team project</li>
        <li>How do you handle conflicting priorities?</li>
      </ul>
      
      <h3>Growth & Learning</h3>
      <ul>
        <li>Tell me about a time you learned a new technology quickly</li>
        <li>Describe how you stay current with technology trends</li>
        <li>What's the biggest mistake you've made?</li>
      </ul>
      
      <h2>Amazon's Leadership Principles</h2>
      <p>Amazon evaluates candidates against 16 leadership principles. Key ones:</p>
      <ul>
        <li><strong>Customer Obsession</strong> - Start with customer needs</li>
        <li><strong>Ownership</strong> - Think long-term, act on behalf of the company</li>
        <li><strong>Invent and Simplify</strong> - Seek innovation and simplification</li>
        <li><strong>Bias for Action</strong> - Speed matters in business</li>
        <li><strong>Deliver Results</strong> - Focus on key inputs and deliver quality outcomes</li>
      </ul>
      
      <h2>Preparation Strategy</h2>
      
      <h3>1. Create Your Story Bank (2-3 weeks before)</h3>
      <p>Prepare 8-10 stories covering:</p>
      <ul>
        <li>Technical challenges</li>
        <li>Team conflicts</li>
        <li>Leadership moments</li>
        <li>Failures and learnings</li>
        <li>Innovation and impact</li>
      </ul>
      
      <h3>2. Practice Out Loud</h3>
      <p>Don't just think through answers—speak them. Record yourself or practice with a friend.</p>
      
      <h3>3. Quantify Your Impact</h3>
      <p>Always include metrics:</p>
      <ul>
        <li>"Reduced API response time by 60%"</li>
        <li>"Increased test coverage from 40% to 85%"</li>
        <li>"Saved the team 10 hours per week"</li>
      </ul>
      
      <h2>Red Flags to Avoid</h2>
      <ul>
        <li>Blaming others or being overly negative</li>
        <li>Taking credit for team achievements</li>
        <li>Being vague or generic</li>
        <li>Rambling without structure</li>
        <li>Not showing growth from failures</li>
      </ul>
      
      <h2>Questions to Ask Interviewers</h2>
      <p>Always prepare thoughtful questions:</p>
      <ul>
        <li>"What does success look like in this role after 6 months?"</li>
        <li>"How does the team handle technical debt?"</li>
        <li>"What's the biggest challenge the team is facing?"</li>
        <li>"How do you support professional development?"</li>
      </ul>
      
      <h2>Company-Specific Tips</h2>
      
      <h3>Google</h3>
      <p>Focus on: Googleyness (collaboration, comfort with ambiguity), cognitive ability, leadership</p>
      
      <h3>Meta</h3>
      <p>Emphasize: Impact, moving fast, being bold</p>
      
      <h3>Microsoft</h3>
      <p>Highlight: Growth mindset, customer focus, diversity & inclusion</p>
      
      <h2>Day-of-Interview Tips</h2>
      <ul>
        <li>Arrive 10 minutes early (or log in early for virtual)</li>
        <li>Bring a notepad to jot down questions</li>
        <li>Smile and show enthusiasm</li>
        <li>Be authentic—don't memorize scripts</li>
        <li>Follow up with a thank-you email within 24 hours</li>
      </ul>
      
      <h2>Final Thoughts</h2>
      <p>Behavioral interviews assess cultural fit and soft skills. Prepare thoroughly, be genuine, and remember that interviewers want you to succeed!</p>
    `
  },
  "data-structures-guide": {
    title: "Data Structures Every Developer Should Know",
    date: "Jan 3, 2025",
    category: "DSA",
    readTime: "15 min read",
    author: "Alex Thompson",
    content: `
      <h2>Essential Data Structures</h2>
      <p>Understanding data structures is crucial for writing efficient code and acing technical interviews. Let's explore the most important ones.</p>
      
      <h2>1. Arrays</h2>
      <p><strong>Time Complexity:</strong></p>
      <ul>
        <li>Access: O(1)</li>
        <li>Search: O(n)</li>
        <li>Insert: O(n)</li>
        <li>Delete: O(n)</li>
      </ul>
      
      <h3>When to Use:</h3>
      <ul>
        <li>Fixed-size collections</li>
        <li>Need fast random access</li>
        <li>Memory-efficient storage</li>
      </ul>
      
      <h3>Common Patterns:</h3>
      <ul>
        <li>Two pointers</li>
        <li>Sliding window</li>
        <li>Kadane's algorithm (max subarray)</li>
      </ul>
      
      <h2>2. Linked Lists</h2>
      <p><strong>Time Complexity:</strong></p>
      <ul>
        <li>Access: O(n)</li>
        <li>Search: O(n)</li>
        <li>Insert: O(1) at head/tail</li>
        <li>Delete: O(1) with reference</li>
      </ul>
      
      <h3>Types:</h3>
      <ul>
        <li>Singly Linked List</li>
        <li>Doubly Linked List</li>
        <li>Circular Linked List</li>
      </ul>
      
      <h3>Common Problems:</h3>
      <ul>
        <li>Reverse a linked list</li>
        <li>Detect cycle (Floyd's algorithm)</li>
        <li>Merge two sorted lists</li>
        <li>Find middle element</li>
      </ul>
      
      <h2>3. Stacks</h2>
      <p>LIFO (Last In, First Out) structure</p>
      
      <h3>Operations: All O(1)</h3>
      <ul>
        <li>push() - Add to top</li>
        <li>pop() - Remove from top</li>
        <li>peek() - View top element</li>
      </ul>
      
      <h3>Use Cases:</h3>
      <ul>
        <li>Function call stack</li>
        <li>Undo/Redo functionality</li>
        <li>Expression evaluation</li>
        <li>Backtracking algorithms</li>
      </ul>
      
      <h3>Classic Problems:</h3>
      <ul>
        <li>Valid parentheses</li>
        <li>Min stack</li>
        <li>Evaluate postfix expression</li>
      </ul>
      
      <h2>4. Queues</h2>
      <p>FIFO (First In, First Out) structure</p>
      
      <h3>Types:</h3>
      <ul>
        <li>Simple Queue</li>
        <li>Circular Queue</li>
        <li>Priority Queue</li>
        <li>Deque (Double-ended queue)</li>
      </ul>
      
      <h3>Use Cases:</h3>
      <ul>
        <li>BFS traversal</li>
        <li>Task scheduling</li>
        <li>Request handling</li>
        <li>Cache implementation (LRU)</li>
      </ul>
      
      <h2>5. Hash Tables</h2>
      <p><strong>Average Time Complexity:</strong></p>
      <ul>
        <li>Insert: O(1)</li>
        <li>Delete: O(1)</li>
        <li>Search: O(1)</li>
      </ul>
      
      <h3>Collision Resolution:</h3>
      <ul>
        <li>Chaining (linked lists)</li>
        <li>Open addressing (linear/quadratic probing)</li>
      </ul>
      
      <h3>Use Cases:</h3>
      <ul>
        <li>Fast lookups</li>
        <li>Counting frequencies</li>
        <li>Caching</li>
        <li>Removing duplicates</li>
      </ul>
      
      <h2>6. Trees</h2>
      
      <h3>Binary Tree</h3>
      <p>Each node has at most 2 children</p>
      
      <h3>Binary Search Tree (BST)</h3>
      <p>Left subtree < root < right subtree</p>
      <p><strong>Time Complexity (balanced):</strong> O(log n) for search, insert, delete</p>
      
      <h3>Tree Traversals:</h3>
      <ul>
        <li>Inorder (Left, Root, Right) - gives sorted order in BST</li>
        <li>Preorder (Root, Left, Right)</li>
        <li>Postorder (Left, Right, Root)</li>
        <li>Level-order (BFS)</li>
      </ul>
      
      <h3>Common Problems:</h3>
      <ul>
        <li>Maximum depth</li>
        <li>Validate BST</li>
        <li>Lowest common ancestor</li>
        <li>Serialize/deserialize tree</li>
      </ul>
      
      <h2>7. Heaps</h2>
      <p>Complete binary tree with heap property</p>
      
      <h3>Types:</h3>
      <ul>
        <li>Min Heap - parent ≤ children</li>
        <li>Max Heap - parent ≥ children</li>
      </ul>
      
      <h3>Time Complexity:</h3>
      <ul>
        <li>Insert: O(log n)</li>
        <li>Delete min/max: O(log n)</li>
        <li>Get min/max: O(1)</li>
      </ul>
      
      <h3>Use Cases:</h3>
      <ul>
        <li>Priority queues</li>
        <li>Heap sort</li>
        <li>Finding k largest/smallest elements</li>
        <li>Median maintenance</li>
      </ul>
      
      <h2>8. Graphs</h2>
      
      <h3>Representations:</h3>
      <ul>
        <li>Adjacency Matrix - O(V²) space</li>
        <li>Adjacency List - O(V + E) space</li>
      </ul>
      
      <h3>Traversal Algorithms:</h3>
      <ul>
        <li><strong>BFS</strong> - Level by level, uses queue</li>
        <li><strong>DFS</strong> - Explore deep, uses stack/recursion</li>
      </ul>
      
      <h3>Important Algorithms:</h3>
      <ul>
        <li>Dijkstra's (shortest path)</li>
        <li>Bellman-Ford (negative weights)</li>
        <li>Kruskal's/Prim's (MST)</li>
        <li>Topological sort</li>
        <li>Union-Find (detect cycles)</li>
      </ul>
      
      <h3>Common Problems:</h3>
      <ul>
        <li>Number of islands</li>
        <li>Course schedule</li>
        <li>Clone graph</li>
        <li>Network delay time</li>
      </ul>
      
      <h2>9. Tries (Prefix Trees)</h2>
      <p>Tree structure for storing strings</p>
      
      <h3>Time Complexity:</h3>
      <ul>
        <li>Insert: O(m) where m is string length</li>
        <li>Search: O(m)</li>
        <li>Prefix search: O(m)</li>
      </ul>
      
      <h3>Use Cases:</h3>
      <ul>
        <li>Autocomplete</li>
        <li>Spell checker</li>
        <li>IP routing</li>
        <li>Word games</li>
      </ul>
      
      <h2>10. Advanced Data Structures</h2>
      
      <h3>Segment Tree</h3>
      <p>Range queries and updates in O(log n)</p>
      
      <h3>Fenwick Tree (Binary Indexed Tree)</h3>
      <p>Efficient prefix sum queries</p>
      
      <h3>Disjoint Set (Union-Find)</h3>
      <p>Track connected components</p>
      
      <h2>Choosing the Right Data Structure</h2>
      
      <table>
        <tr>
          <th>Need</th>
          <th>Use</th>
        </tr>
        <tr>
          <td>Fast lookups</td>
          <td>Hash Table</td>
        </tr>
        <tr>
          <td>Sorted data</td>
          <td>BST, Heap</td>
        </tr>
        <tr>
          <td>LIFO operations</td>
          <td>Stack</td>
        </tr>
        <tr>
          <td>FIFO operations</td>
          <td>Queue</td>
        </tr>
        <tr>
          <td>Priority-based</td>
          <td>Heap</td>
        </tr>
        <tr>
          <td>Hierarchical data</td>
          <td>Tree</td>
        </tr>
        <tr>
          <td>Relationships</td>
          <td>Graph</td>
        </tr>
      </table>
      
      <h2>Interview Preparation Tips</h2>
      <ul>
        <li>Understand time and space complexity</li>
        <li>Know when to use each data structure</li>
        <li>Practice implementing from scratch</li>
        <li>Solve problems on LeetCode, HackerRank</li>
        <li>Learn to recognize patterns</li>
      </ul>
      
      <h2>Resources</h2>
      <ul>
        <li>Introduction to Algorithms (CLRS)</li>
        <li>Cracking the Coding Interview</li>
        <li>LeetCode Explore Cards</li>
        <li>Visualgo.net for visualizations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering these data structures is essential for any software engineer. Practice regularly, understand the trade-offs, and you'll be well-prepared for technical interviews!</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts[params.id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-[#7ec4b6] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 50%, #fef5e7 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <Link href="/blog">
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </motion.div>
        </Link>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-xl border border-white/80"
        >
          <div className="mb-6">
            <span className="px-4 py-2 rounded-full bg-[#7ec4b6]/20 text-sm font-semibold text-gray-800">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7ec4b6] to-[#6eb4a6] flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            style={{
              color: '#374151',
              lineHeight: '1.8'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="text-[#7ec4b6] hover:text-[#6eb4a6] font-medium">
                ← More Articles
              </Link>
              <Link href="/generate" className="px-6 py-3 rounded-full bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-semibold transition-colors">
                Start Practicing →
              </Link>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Custom Styles for Article Content */}
      <style jsx global>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
        }
        .prose ul, .prose ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose pre {
          background: #1f2937;
          color: #f3f4f6;
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .prose code {
          background: #f3f4f6;
          color: #1f2937;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }
        .prose pre code {
          background: transparent;
          color: inherit;
          padding: 0;
        }
        .prose strong {
          color: #1f2937;
          font-weight: 600;
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        .prose th, .prose td {
          border: 1px solid #e5e7eb;
          padding: 0.75rem;
          text-align: left;
        }
        .prose th {
          background: #f9fafb;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
