const database = require("../../Model");
const categoryDB = database.CategoryModel;

//카테고리 등록
const PostCategory = async (req, res) => {
    const { category } = req.body;
    console.log(req.body);

    try {
        const newCategory = await categoryDB.create({
            category,
        });

        return res.status(201).json({ message: "카테고리가 성공적으로 등록되었습니다.", category: newCategory });
    } catch (error) {
        console.error("카테고리 등록 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

//카테고리 수정
const UpdateCategory = async (req, res) => {
    const { id, category } = req.body;
    console.log(req.body);

    try {
        const categoryToUpdate = await categoryDB.findByPk(id);

        if (!categoryToUpdate) {
            return res.status(404).json({ message: "카테고리를 찾을 수 없습니다." });
        }

        const updatedCategory = await categoryToUpdate.update({
            category: category || categoryToUpdate.category,
        });

        return res.status(200).json({ message: "카테고리가 성공적으로 수정되었습니다.", category: updatedCategory });
    } catch (error) {
        console.error("카테고리 수정 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

//카테고리 삭제
const DeleteCategory = async (req, res) => {
    const { id } = req.params;
    console.log(`삭제할 카테고리 ID: ${id}`);

    try {
        const categoryToDelete = await categoryDB.findByPk(id);

        if (!categoryToDelete) {
            return res.status(404).json({ message: "카테고리를 찾을 수 없습니다." });
        }

        // 카테고리 삭제
        await categoryToDelete.destroy();

        return res.status(200).json({ message: "카테고리가 성공적으로 삭제되었습니다." });
    } catch (error) {
        console.error("카테고리 삭제 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};


//전체 카테고리 조회
const GetAllCategories = async (req, res) => {
    try {
        const categories = await categoryDB.findAll();

        return res.status(200).json({ message: "모든 카테고리 데이터를 가져왔습니다.", categories });
    } catch (error) {
        console.error("모든 카테고리 데이터 가져오는 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};


module.exports = {
    PostCategory,
    UpdateCategory,
    GetAllCategories,
    DeleteCategory
};
