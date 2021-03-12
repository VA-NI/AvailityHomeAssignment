package com.availity.test.lispchecker;

import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class LISPChecker {

    public boolean checkLispExpression(String expression) {
        if(expression==null || !expression.startsWith("(") || !expression.endsWith(")")){
            return false;
        }
        Map<Character, Character> openClosePair = new HashMap<>();
        openClosePair.put(')', '(');
        Stack<Character> stack = new Stack<Character>();
        for(char ch : expression.toCharArray()) {
            if(openClosePair.containsKey(ch)) {
                if(stack.isEmpty() || stack.pop() != openClosePair.get(ch)) {
                    return false;
                }
            } else if(openClosePair.containsValue(ch)) {
                stack.push(ch);
            }
        }
        return stack.isEmpty();
    }
}
