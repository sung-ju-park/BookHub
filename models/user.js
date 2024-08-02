import mongoose from 'mongoose';
import { useVirtualId } from './database.js';

const userSchema = new mongoose.Schema({
    userid: { type: String, required: true, unique: true },
    userpw: { type: String, required: true },
    name: { type: String, required: true },
    hp: { type: String, required: true },
    email: { type: String, required: true },
    ssn: { type: String, required: true },
    address: { type: String, required: true },
    recentBooks: { type: [String], default: [] } // 최근 본 책의 URL을 저장하는 배 
});

// 최근 본 책 배열 길이 제한
userSchema.pre('save', function(next) {
    if (this.recentBooks.length > 5) {
        this.recentBooks = this.recentBooks.slice(-5);
    }
    next();
});

useVirtualId(userSchema);

const User = mongoose.models.User || mongoose.model('User', userSchema); // 기존 모델이 있는지 확인하고 사용

// userid 찾기
export async function findByuserid(userid) {
    return User.findOne({ userid });
}

// _id 중복검사
export async function findById(id) {
    return User.findById(id);
}

// 사용자 생성
export async function createUser(user) {
    return new User(user).save().then((data) => data.id);
}

// 아이디 찾기
export async function findUser(name, hp) {
    const user = await User.findOne({ name, hp });
    return user ? user.userid : null;
}

// 해당 유저 찾기
export async function getUserById(userid) {
    return User.findOne({ userid });
}

// 해당 유저 정보 업데이트
export async function updateUser(userId, newData) {
    return await User.findOneAndUpdate({ userid: userId }, newData, { new: true });
}

// 해당 유저 비밀번호 업데이트
export async function updateUserPassword(userId, newPassword) {
    return await User.findOneAndUpdate({ userid: userId }, { userpw: newPassword }, { new: true });
}

export default User;
