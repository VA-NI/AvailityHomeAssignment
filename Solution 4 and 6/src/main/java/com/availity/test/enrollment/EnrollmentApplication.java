package com.availity.test.enrollment;

import com.availity.test.enrollment.service.EnrollmentService;

public class EnrollmentApplication {

    public static void main(String[] args) {
        EnrollmentService service=new EnrollmentService();
        service.processCSVEnrollment("enrollment.csv");
    }
}
