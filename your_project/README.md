
# 📊 Linear Optimization: Server Procurement for Intranet Deployment

This project addresses a real-world integer programming problem involving phased server procurement for a company-wide intranet rollout at CommuniCorp. The challenge involves meeting growing departmental demand while minimizing costs under budget and capacity constraints.

### Click here for more [![More Details badge](https://img.shields.io/badge/Click-Here-brightgreen.svg)](./linear_optimization_Project_UPDATED.ipynb)

---

## 🚀 Project Objective

To determine the optimal number and type of servers to purchase over five months to:

- Support department-specific user rollouts,
- Stay within a strict budget for initial months,
- Comply with hardware and timing constraints,
- Minimize the total procurement cost.

---

## 🧠 Problem Context

CommuniCorp suffered from poor internal communication, causing order delays and customer dissatisfaction. The solution was to phase in an intranet, requiring IT infrastructure scaled month-by-month.

Servers vary in capacity and cost, with discounts available early. The project uses linear (integer) programming to formulate two models:

- **Monthly Model (1a):** Optimize each month independently.
- **Cumulative Model (1b):** Optimize purchases across all months using early capacity.

---

## 🧮 Tools Used

- Python 🐍
- PuLP (Linear Programming Solver)
- Jupyter Notebook

---

## ✅ Final Results

### Monthly Optimization (1a)

| Month | Department     | Server Type         | Quantity | Cost     |
|-------|----------------|---------------------|----------|----------|
| 2     | Sales          | Standard (30 users) | 2        | $5,000   |
| 3     | Manufacturing  | SGI (200 users)     | 1        | $10,000  |
| 4     | Warehouse      | Standard            | 1        | $2,500   |
| 5     | Marketing      | Enhanced (80 users) | 1        | $5,000   |
|       |                | **Total**           |          | **$22,500** |

### Cumulative Optimization (1b)

| Month | Server Type     | Quantity | Discounted | Cost     |
|-------|------------------|----------|------------|----------|
| 1     | SGI              | 1        | Yes (10%)  | $9,000   |
| 3     | SGI              | 1        | No         | $10,000  |
|       |                  |          |            | **$19,000** |

✅ **Cumulative planning saved $3,500** by leveraging early discounts and future-ready capacity.

---

## 📎 Files Included

- `linear_optimization_Project_UPDATED.ipynb`: Final notebook with markdown explanations and solutions.
- `CASE STUDY 1 AYODELE.docx`: Full problem description and case context.

---

## 📌 Conclusion

This project illustrates the effectiveness of optimization techniques like Integer Programming in solving complex resource allocation and cost-minimization problems. It demonstrates how strategic planning and early investment can yield significant savings.

---

## 👤 Author

**Fijimi Ayodele**  
Master’s in Data Science, Texas Tech University  
Email: fijimiayodele@gmail.com
