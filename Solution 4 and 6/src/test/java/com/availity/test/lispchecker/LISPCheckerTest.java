package com.availity.test.lispchecker;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class LISPCheckerTest {

    @Test
    public void testSuccessScenario(){
        LISPChecker lispChecker=new LISPChecker();
        Assertions.assertTrue(lispChecker.checkLispExpression("(list)"));
        Assertions.assertTrue(lispChecker.checkLispExpression("(valid (expression))"));
        Assertions.assertTrue(lispChecker.checkLispExpression("((a+b)(c+d))"));
    }

    @Test
    public void testFailedScenario(){
        LISPChecker lispChecker=new LISPChecker();
        Assertions.assertFalse(lispChecker.checkLispExpression("list)"));
        Assertions.assertFalse(lispChecker.checkLispExpression(null));
        Assertions.assertFalse(lispChecker.checkLispExpression("((a+b)(c+d)))"));
    }
}
