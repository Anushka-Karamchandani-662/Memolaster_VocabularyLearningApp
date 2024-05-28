const intermediateWordModel=require('../models/intermediateWordModel')

let currentPage = 1; // Initialize current page

module.exports.getWordss = async (req, res) => {
    const pageSize = 1; // Number of words to retrieve per page

    try {
        const totalCount = await intermediateWordModel.countDocuments({}); // Get total count of words in the database
        const totalPages = Math.ceil(totalCount / pageSize); // Calculate total pages based on total count and page size

        const skip = (currentPage - 1) * pageSize; // Calculate number of words to skip
        const data = await intermediateWordModel.find({}).skip(skip).limit(pageSize); // Retrieve words for the current page

        if (data.length > 0) {
            res.send({ code: 200, message: "Find success", data: data, totalPages: totalPages });
        } else if (currentPage > totalPages) {
            res.send({ code: 404, message: 'No more data available' });
        } else {
            res.status(500).send({ code: 500, message: "Server error" });
        }

        // Increment current page for next request
        currentPage++;
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ code: 500, message: "Server error" });
    }
};



