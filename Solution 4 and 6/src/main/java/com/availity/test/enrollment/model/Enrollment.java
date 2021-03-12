package com.availity.test.enrollment.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Enrollment {
    private String userId;
    private String firstName;
    private String lastName;
    private Integer version;
    private String insuranceCompany;

    @Override
    public String toString(){
        return String.format("%s,%s,%s,%s,%s",userId,firstName,lastName,version,insuranceCompany);
    }
}
