package com.example.demo.student;


import com.example.demo.student.exception.BadRequestException;
import com.example.demo.student.exception.StudentNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }


    public void addStudent(Student student) {
        Boolean emailPresent = studentRepository
                .selectExistsEmail(student.getEmail());
        if (emailPresent){
            throw new BadRequestException("email taken");
        }
        studentRepository.save(student);
    }


    public void deleteStudent(Long studentId) {
        boolean exists =  studentRepository.existsById(studentId);
        if(!exists){
            throw new StudentNotFoundException(" student with Id  " + studentId + "  does not exist");
        }
        studentRepository.deleteById(studentId);
    }
}
