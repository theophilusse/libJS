package com.rubix.rubix;

import com.rubix.rubix.AxisVectors;

public class Toolbox {

    public AxisVectors axis;
    public float[]      tmp;
    public float[]      colorVec;
    public int[]        point;
    public int[]        anaglyphPoint;
    static public float rad90 = (float)(Math.PI / 2);
    static public float rad180 = (float)Math.PI;
    static public float rad360 = (float)Math.PI * 2;
    static public float pi = (float)Math.PI;
    static public float pi2 = (float)(Math.PI * 2);

    public Toolbox(int numPoints)
    {
        axis = new AxisVectors();
        point = new int[numPoints * 2];
        anaglyphPoint = new int[numPoints * 2];
        tmp = new float[3];
        colorVec = new float[3];
    }

    /*
    public float[]      getDown()
    {
        return (down.clone());
    }

    public float[]      getUp()
    {
        return (up.clone());
    }

    public float[]      getFront()
    {
        return (front.clone());
    }

    public float[]      getBack()
    {
        return (back.clone());
    }

    public float[]      getLeft()
    {
        return (left.clone());
    }

    public float[]      getRight()
    {
        return (right.clone());
    }
    */

	/* // JAVA
    static public float[]       vecAt(float[] out, float[] vertice, int offset)
    {
        offset *= 3; // Todo ::: TESTING
        out[0] = vertice[offset++];
        out[1] = vertice[offset++];
        out[2] = vertice[offset];
        return (out);
    }*/
	// JS
	function				vecAt(out, vertice, offset)
    {
		// Rien a changer
        offset *= 3; // Todo ::: TESTING
        out[0] = vertice[offset++];
        out[1] = vertice[offset++];
        out[2] = vertice[offset];
        return (out);
    }

    // -> RTv1
	/* // JAVA
    static public float[] rotVec(float[] output, float[] axis, float[] lev, float a)
    {
        float				cosa;
        float				sina;

        cosa = (float)Math.cos(a);
        sina = (float)Math.sin(a);
        output[0] = (cosa + (1 - cosa) * axis[0] * axis[0]) * lev[0];
        output[0] += ((1 - cosa) * axis[0] * axis[1] - axis[2] * sina) * lev[1];
        output[0] += ((1 - cosa) * axis[0] * axis[2] + axis[1] * sina) * lev[2];
        output[1] = ((1 - cosa) * axis[0] * axis[1] + axis[2] * sina) * lev[0];
        output[1] += (cosa + (1 - cosa) * axis[1] * axis[1]) * lev[1];
        output[1] += ((1 - cosa) * axis[1] * axis[2] - axis[0] * sina) * lev[2];
        output[2] = ((1 - cosa) * axis[0] * axis[2] - axis[1] * sina) * lev[0];
        output[2] += ((1 - cosa) * axis[1] * axis[2] + axis[0] * sina) * lev[1];
        output[2] += (cosa + (1 - cosa) * axis[2] * axis[2]) * lev[2];
        return (output);
    }
	*/
	// JS
    function			rotVec(float[] output, float[] axis, float[] lev, float a)
    {
        float				cosa;
        float				sina;

        cosa = (float)Math.cos(a);
        sina = (float)Math.sin(a);
        output[0] = (cosa + (1 - cosa) * axis[0] * axis[0]) * lev[0];
        output[0] += ((1 - cosa) * axis[0] * axis[1] - axis[2] * sina) * lev[1];
        output[0] += ((1 - cosa) * axis[0] * axis[2] + axis[1] * sina) * lev[2];
        output[1] = ((1 - cosa) * axis[0] * axis[1] + axis[2] * sina) * lev[0];
        output[1] += (cosa + (1 - cosa) * axis[1] * axis[1]) * lev[1];
        output[1] += ((1 - cosa) * axis[1] * axis[2] - axis[0] * sina) * lev[2];
        output[2] = ((1 - cosa) * axis[0] * axis[2] - axis[1] * sina) * lev[0];
        output[2] += ((1 - cosa) * axis[1] * axis[2] + axis[0] * sina) * lev[1];
        output[2] += (cosa + (1 - cosa) * axis[2] * axis[2]) * lev[2];
        return (output);
    }

	/* // JAVA
    static public void      rot90clockwise2d(float[] out, float[] in)
    {
        out[0] = in[1] * 1;
        out[1] = in[0] * -1;
    }
	*/
	// JS
	function				rot90clockwise2d(out, _in)
    {
        out[0] = _in[1] * 1;
        out[1] = _in[0] * -1;
    }

	/* // JAVA
    static public void      rot90counterClockwise2d(float[] out, float[] in)
    {
        out[0] = in[1] * -1;
        out[1] = in[0] * 1;
    }
	*/
	// JS
	function				rot90counterClockwise2d(out, _in)
    {
        out[0] = in[1] * -1;
        out[1] = in[0] * 1;
    }

	/* // JAVA
    static public void      rotDotClockwise2d(float[] out, float[] in, float dot)
    {
        out[0] = in[1] * dot;
        out[1] = in[0] * (dot * -1);
    }
	*/
	// JS
	function				rotDotClockwise2d(float[] out, float[] in, float dot)
    {
        out[0] = in[1] * dot;
        out[1] = in[0] * (dot * -1);
    }

	/* // JAVA
    static public void      rotDotCounterClockwise2d(float[] out, float[] in, float dot)
    {
        out[0] = in[1] * (dot * -1);
        out[1] = in[0] * dot;
    }
	*/
	// JS
	function				rotDotCounterClockwise2d(out, _in, dot)
    {
        out[0] = _in[1] * (dot * -1);
        out[1] = _in[0] * dot;
    }

	/* // JAVA
    static public int getColor(int r, int g, int b)
    {
        int color;

        color = r << 16;
        color += g << 8;
        color += b;
        return (0xff000000 | color);
    }
	*/
	// JS
	function				getColor(r, g, b)
    {
        var	color;

        color = r << 16;
        color += g << 8;
        color += b;
        return (0xff000000 | color);
    }

	/* // JAVA
    static public int getColorClamp(int r, int g, int b)
    {
        int color;

        r = Math.min(r, 255);
        g = Math.min(g, 255);
        b = Math.min(b, 255);
        color = r << 16;
        color += g << 8;
        color += b;
        return (0xff000000 | color);
    }
	*/
	// JS
	function			getColorClamp(r, g, b)
    {
        var color;

        r = Math.min(r, 255);
        g = Math.min(g, 255);
        b = Math.min(b, 255);
        color = r << 16;
        color += g << 8;
        color += b;
        return (0xff000000 | color);
    }

	/* // JAVA
    static public int mixColor(int cA, int cB)
    {
        int rA;
        int gA;
        int bA;
        int rB;
        int gB;
        int bB;

        rA = (int)((cA & 0x00ff0000) >> 16);
        gA = (int)((cA & 0x0000ff00) >> 8);
        bA = (int)(cA & 0x000000ff);
        rB = (int)((cB & 0x00ff0000) >> 16);
        gB = (int)((cB & 0x0000ff00) >> 8);
        bB = (int)(cB & 0x000000ff);
        return (mixColor(rA, gA, bA, rB, gB, bB));
    }
	*/
	// JS
	function			mixColor(cA, cB)
    {
        var rA;
        var gA;
        var bA;
        var rB;
        var gB;
        var bB;

        rA = ((cA & 0x00ff0000) >> 16);
        gA = ((cA & 0x0000ff00) >> 8);
        bA = (cA & 0x000000ff);
        rB = ((cB & 0x00ff0000) >> 16);
        gB = ((cB & 0x0000ff00) >> 8);
        bB = (cB & 0x000000ff);
        return (mixColor(rA, gA, bA, rB, gB, bB));
    }

	/* // JAVA
    static public int getRed(int c)
    {
        return (c & 0x00ff0000);
    }
	*/
	// JS
	function getRed(c)
    {
        return (c & 0x00ff0000);
    }

	/* // JAVA
    static public int getGreen(int c)
    {
        return (c & 0x0000ff00);
    }
	*/
	// JS
	function getGreen(c)
    {
        return (c & 0x0000ff00);
    }

	/* // TOP
	function		getChannel(c, cc) // Generic
	{
		return (c & (0x000000ff << cc));
	}
	*/
	// GROUD
	/*
	function		JavaToJs_fast(code)
	{
		var isInBlock = 0;
		var js = '';
		var newline = code.split('\n');
		var i = -1;
		while (++i < newline.length) //
		{ //
			var j = -1;
			var fast = newline[i].split(' ');
			while (++j < fast.length)
			{
				concat = true;
				word = fast[j];
				if (word == '\\')
					js += '\\n';
				if (word == '{' || word == '}')
					isInBlock += word == '{' ? 1 : -1;
				if (word == 'int' || word == 'float' || word == 'double')
				{
					if (isInBlock == 0)
						concat = false;
					else
						word = 'var'
				}
				if (isInBlock > 0)
				{
					;
				}
				else
				{
					if (
						// word == 'static' ||
						word == 'int' || word == 'float' || word == 'double')
						word == '';
					if (word == 'public')
						word = 'function';
				}
				if (concat == true)
					js += word + ' ';
			}
			js += "\n\n\n"; //
		} //
		return (js);
	}*/

	/* // JAVA
	static public int getBlue(int c)
    {
        return (c & 0x000000ff);
    }
	*/
	// JS
	function		getBlue(c)
    {
        return (c & 0x000000ff);
    }

	/* // JAVA
    static public int mixColor(int rA, int gA, int bA, int rB, int gB, int bB)
    {
        return (getColor((rA + rB) / 2, (gA + gB) / 2, (bA + bB) / 2));
    }
	*/
	// JS
	function		mixColor(int rA, int gA, int bA, int rB, int gB, int bB)
    {
        return (getColor((rA + rB) / 2, (gA + gB) / 2, (bA + bB) / 2));
    }

	/* // JAVA
    static public int addColor(int color, int value)
    {
        return (getColorClamp(getRed(color) + value, getGreen(color) + value, getBlue(color) + value));
    }
	*/
	// JS
	function		addColor(int color, int value)
    {
        return (getColorClamp(getRed(color) + value, getGreen(color) + value, getBlue(color) + value));
    }
	
	/* // JAVA
    static public int addColorColor(int color, int value)
    {
        int r;
        int g;
        int b;
        int ro;
        int go;
        int bo;
        int origin;

        r = (getRed(color) + getRed(value));
        g = (getGreen(color) + getGreen(value));
        b = (getBlue(color) + getBlue(value));
        ro = 255 - r;
        go = 255 - g;
        bo = 255 - b;
        origin = 0;
        if (ro < 0)
            origin += ro * -1;
        if (go < 0)
            origin += go * -1;
        if (bo < 0)
            origin += bo * -1;
        if (origin != 0)
        {
            if (r < 255)
                r += origin;
            if (g < 255)
                g += origin;
            if (b < 255)
                b += origin;
        }
        return (getColor(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255)));
    }
	*/
	// JS
    function		addColorColor(color, value)
    {
        var r;
        var g;
        var b;
        var ro;
        var go;
        var bo;
        var origin;

        r = (getRed(color) + getRed(value));
        g = (getGreen(color) + getGreen(value));
        b = (getBlue(color) + getBlue(value));
        ro = 255 - r;
        go = 255 - g;
        bo = 255 - b;
        origin = 0;
        if (ro < 0)
            origin += ro * -1;
        if (go < 0)
            origin += go * -1;
        if (bo < 0)
            origin += bo * -1;
        if (origin != 0)
        {
            if (r < 255)
                r += origin;
            if (g < 255)
                g += origin;
            if (b < 255)
                b += origin;
        }
        return (getColor(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255)));
    }

	/* // JAVA
    static public int mulColor(int color, float factor)
    {
        int r;
        int g;
        int b;

        r = Math.min(255, Math.max(0, (int)((float)((color & 0x00ff0000) >> 16) * factor)));
        g = Math.min(255, Math.max(0, (int)((float)((color & 0x0000ff00) >> 8) * factor)));
        b = Math.min(255, Math.max(0, (int)((float) (color & 0x000000ff) * factor)));
        return (getColor(r, g, b));
    }
	*/
	// JS
	function		mulColor(color, factor)
    {
        var r;
        var g;
        var b;

        r = Math.min(255, Math.max(0, (((color & 0x00ff0000) >> 16) * factor)));
        g = Math.min(255, Math.max(0, (((color & 0x0000ff00) >> 8) * factor)));
        b = Math.min(255, Math.max(0, ((color & 0x000000ff) * factor)));
        return (getColor(r, g, b));
    }

	/* // JAVA
    static public int mulColorReal(int color, float factor)
    {
        int r;
        int g;
        int b;
        int ro;
        int go;
        int bo;
        int origin;

        r = (int)((float)((color & 0x00ff0000) >> 16) * factor);
        g = (int)((float)((color & 0x0000ff00) >> 8) * factor);
        b = (int)((float) (color & 0x000000ff) * factor);
        ro = 255 - r;
        go = 255 - g;
        bo = 255 - b;
        origin = 0;
        if (ro < 0)
            origin += ro * -1;
        if (go < 0)
            origin += go * -1;
        if (bo < 0)
            origin += bo * -1;
        if (origin != 0)
        {
            if (r < 255)
                r += origin;
            if (g < 255)
                g += origin;
            if (b < 255)
                b += origin;
        }
        return (getColor(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255)));
    }
	*/
	// JS
	function		mulColorReal(color, factor)
    {
        var r;
        var g;
        var b;
        var ro;
        var go;
        var bo;
        var origin;

        r = (((color & 0x00ff0000) >> 16) * factor);
        g = (((color & 0x0000ff00) >> 8) * factor);
        b = ((color & 0x000000ff) * factor);
        ro = 255 - r;
        go = 255 - g;
        bo = 255 - b;
        origin = 0;
        if (ro < 0)
            origin += ro * -1;
        if (go < 0)
            origin += go * -1;
        if (bo < 0)
            origin += bo * -1;
        if (origin != 0)
        {
            if (r < 255)
                r += origin;
            if (g < 255)
                g += origin;
            if (b < 255)
                b += origin;
        }
        return (getColor(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255)));
    }

	/* // JAVA
    static public float[] subColor(float[] out, int colorA, int colorB)
    {
        out[0] = (int)(colorA & 0x00ff0000) - (int)(colorB & 0x00ff0000);
        out[1] = (int)(colorA & 0x0000ff00) - (int)(colorB & 0x0000ff00);
        out[2] = (int)(colorA & 0x000000ff) - (int)(colorB & 0x000000ff);
        return (out);
    }
	*/
	// JS
    function		subColor(out, colorA, colorB)
    {
        out[0] = (colorA & 0x00ff0000) - (colorB & 0x00ff0000);
        out[1] = (colorA & 0x0000ff00) - (colorB & 0x0000ff00);
        out[2] = (colorA & 0x000000ff) - (colorB & 0x000000ff);
        return (out);
    }

	/* // JAVA
    public int colorSpace(int colorFrom, int colorTo, float factor)
    {
        factor = Math.abs(factor);
        colorVec = subColor(tmp, colorTo, colorFrom);
        colorVec[0] *= factor;
        colorVec[0] += (float)(colorFrom & 0x00ff0000);
        colorVec[1] *= factor;
        colorVec[1] += (float)(colorFrom & 0x0000ff00);
        colorVec[2] *= factor;
        colorVec[2] += (float)(colorFrom & 0x000000ff);
        return (getColor((int)colorVec[0], (int)colorVec[1], (int)colorVec[2]));
    }
	*/
	// JS
	function		colorSpace(colorFrom, colorTo, factor)
    {
        factor = Math.abs(factor);
        colorVec = subColor(tmp, colorTo, colorFrom);
        colorVec[0] *= factor;
        colorVec[0] += (colorFrom & 0x00ff0000);
        colorVec[1] *= factor;
        colorVec[1] += (colorFrom & 0x0000ff00);
        colorVec[2] *= factor;
        colorVec[2] += (colorFrom & 0x000000ff);
        return (getColor(colorVec[0], colorVec[1], colorVec[2]));
    }

	/* JAVA
    static public double       magVector(float x, float y, float z)
    {
        double     w;

        x *= x;
        y *= y;
        z *= z;
        w = x + y + z;
        if (w == 0)
            return (0);
        return (Math.sqrt(w));
    }*/
	// JS
    function		magVector(vector)
    {
        var x;
        var y;
        var z;

        x = vector[0];
        y = vector[1];
        z = vector[2];
        x *= x;
        y *= y;
        z *= z;
        z = x + y + z;
        if (z == 0)
            return (0);
        return (Math.sqrt(z));
    }

	/* JAVA
    static public double       magVector2d(float x, float y)
    {
        double w;

        w = (x * x) + (y * y);
        if (w == 0)
            return (0);
        return (Math.sqrt(w));
    }
	*/
	function					magVector2d(x, y)
    {
        var w;

        w = (x * x) + (y * y);
        if (w == 0)
            return (0);
        return (Math.sqrt(w));
    }

	/* // JAVA
    static public double       magVector2d(float[] vector)
    {
        float x;
        float y;
        float z;

        x = vector[0];
        y = vector[1];
        x *= x;
        y *= y;
        z = x + y;
        if (z == 0f)
            return (0);
        return (Math.sqrt(z));
    }*/
	// JS
    function  					magVector2d(vector)
    {
        var x;
        var y;
        var z;

        x = vector[0];
        y = vector[1];
        x *= x;
        y *= y;
        z = x + y;
        if (z == 0)
            return (0);
        return (Math.sqrt(z));
    }

	/* // JAVA
	static public float         dotProd(float[] a, float[] b)
    {
        return (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
    }
	*/
	// JS
	function					dotProd(float[] a, float[] b)
    {
        return (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
    }

	/* // JAVA
    static public float         dotProd2d(float[] a, float[] b)
    {
        return (a[0] * b[0] + a[1] * b[1]);
    }*/
    function					dotProd2d(float[] a, float[] b)
    {
        return (a[0] * b[0] + a[1] * b[1]);
    }

    /* // JAVA
	static public void          crossProd2(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] * b[1] - a[1] * b[0];
        out[1] = a[1] * b[0] - a[0] * b[1];
    }*/
    function					crossProd2(out, a, b)
    {
        out[0] = a[0] * b[1] - a[1] * b[0];
        out[1] = a[1] * b[0] - a[0] * b[1];
    }

	/* // JAVA
    static public void          crossProd(float[] out, float[] a, float[] b)
    {
        out[0] = a[1] * b[2] - a[2] * b[1];
        out[1] = a[2] * b[0] - a[0] * b[2];
        out[2] = a[0] * b[1] - a[1] * b[0];
    }*/
	function				crossProd(out, a, b)
    {
        out[0] = a[1] * b[2] - a[2] * b[1];
        out[1] = a[2] * b[0] - a[0] * b[2];
        out[2] = a[0] * b[1] - a[1] * b[0];
    }

	/* // JAVA
    static public float[]          revVector(a)
    {
        a[0] *= -1;
        a[1] *= -1;
        a[2] *= -1;
        return (a);
    }
	*/
	function						revVector(a)
    {
        a[0] *= -1;
        a[1] *= -1;
        a[2] *= -1;
        return (a);
    }

	/* // JAVA
    static public void             revVectorCopy(float[] out, float[] a)
    {
        out[0] = a[0] * -1;
        out[1] = a[1] * -1;
        out[2] = a[2] * -1;
    }*/
	function						revVectorCopy(out, a)
    {
        out[0] = a[0] * -1;
        out[1] = a[1] * -1;
        out[2] = a[2] * -1;
    }

	/* // JAVA
    static public void  copyVec(float[] dst, float[] src)
    {
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
    }*/
    function			copyVec(dst, src)
    {
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
    }

	/* // JAVA
    static public float[]          mulVector(float[] a, float v)
    {
        a[0] *= v;
        a[1] *= v;
        a[2] *= v;
        return (a);
    }*/
	function						mulVector(a, v)
    {
        a[0] *= v;
        a[1] *= v;
        a[2] *= v;
        return (a);
    }

	/* // JAVA
    static public int[]          mulVector2di(int[] a, float v)
    {
        a[0] = (int)((float)a[0] * v);
        a[1] = (int)((float)a[1] * v);
        return (a);
    }*/
    function					mulVector2di(int[] a, float v)
    {
        a[0] = (int)((float)a[0] * v);
        a[1] = (int)((float)a[1] * v);
        return (a);
    }

	/* // JAVA
    static public float[]          mulVector2d(float[] a, float v)
    {
        a[0] *= v;
        a[1] *= v;
        return (a);
    }*/
	function						mulVector2d(float[] a, float v)
    {
        a[0] *= v;
        a[1] *= v;
        return (a);
    }

	/* // JAVA
	static public float[]          mulVector2difCopy(float[] out, float[] a, float v)
    {
        out[0] = a[0] * v;
        out[1] = a[1] * v;
        return (out);
    }*/
    function						mulVector2difCopy(out, a, v)
    {
        out[0] = a[0] * v;
        out[1] = a[1] * v;
        return (out);
    }

	/* // JAVA
    static public int[]          mulVector2difCopy(int[] out, int[] a, float v)
    {
        out[0] = (int)((float)a[0] * v);
        out[1] = (int)((float)a[1] * v);
        return (out);
    }*/
	function					mulVector2difCopy(out, a, v)
    {
        out[0] = ((float)a[0] * v);
        out[1] = ((float)a[1] * v);
        return (out);
    }

	/* // JAVA
    static public void             mulVectorVector(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
    }*/
	function					mulVectorVector(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
    }

	/* // JAVA
    static public float[] scaleModel(float[] vertice, float scale)
    {
        int sz;

        sz = vertice.length;
        for (int i = 0; i < sz; i++)
            vertice[i] *= scale;
        return (vertice);
    }*/
	function					scaleModel(float[] vertice, float scale)
    {
        int sz;

        sz = vertice.length;
        for (int i = 0; i < sz; i++)
            vertice[i] *= scale;
        return (vertice);
    }

	/* // JAVA
    static public float[]       subVector(float[] a, float[] b)
    {
        a[0] -= b[0];
        a[1] -= b[1];
        a[2] -= b[2];
        return (a);
    }*/
	function					subVector(a, b)
    {
        a[0] -= b[0];
        a[1] -= b[1];
        a[2] -= b[2];
        return (a);
    }

	/* // JAVA
    static public void             subVectorCopy(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
    }*/
	function					subVectorCopy(out, a, b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
    }

	/* // JAVA
	static public void             subVector2dCopy(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
    }*/
    function					subVector2dCopy(out, a, b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
    }

	/* // JAVA
	static public void             subVector2dCopy(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
    }*/
    function					subVector2diCopy(out, a, b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
    }

	/* // JAVA
	static public void             subVector2dCopy(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
    }*/
    function					subVector2difCopy(out, a, b)
    {
        out[0] = (a[0] - b[0]);
        out[1] = (a[1] - b[1]);
    }

	/* // JAVA
    static public float[]          addVector(float[] a, float[] b)
    {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
        return (a);
    }*/
    function					addVector(a, b)
    {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
        return (a);
    }

	/* // JAVA
    static public void             addVectorCopy(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
    }
	*/
    function					addVectorCopy(out, a, b)
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
    }

	/* // JAVA
    static public void             addVector2dCopy(float[] out, float[] a, float[] b)
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
    }*/
    function					addVector2dCopy(out, a, b)
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
    }

	/* // JAVA
	static public void             addVector2diCopy(out, a, b)
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
    }*/
    function					addVector2diCopy(out, a, b)
    {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
    }

	/* // JAVA
    static public void             addVector2diCopy(int[] out, float[] a, float[] b)
    {
        out[0] = (int)(a[0] + b[0]);
        out[1] = (int)(a[1] + b[1]);
    }*/
    function					addVector2diCopy(out, a, b)
    {
        out[0] = (int)(a[0] + b[0]);
        out[1] = (int)(a[1] + b[1]);
    }

	/* // JAVA
    static public void             addVector2difCopy(float[] out, int[] a, int[] b)
    {
        out[0] = (float)(a[0] + b[0]);
        out[1] = (float)(a[1] + b[1]);
    }*/
	function					addVector2difCopy(out, a, b)
    {
        out[0] = (a[0] + b[0]);
        out[1] = (a[1] + b[1]);
    }

	/* // JAVA
    static public float[]          normalize(float[] out, float[] vector)
    {
        float       len;

        len = (float)magVector(vector);
        if (len == 0)
            return (out);
        out[0] = vector[0] / len;
        out[1] = vector[1] / len;
        out[2] = vector[2] / len;
        return (out);
    }*/
    function						normalize(out, vector)
    {
        var				len;

        len = magVector(vector);
        if (len == 0)
            return (out);
        out[0] = vector[0] / len;
        out[1] = vector[1] / len;
        out[2] = vector[2] / len;
        return (out);
    }

	/*
	function						normalize2d(out, vector)
    {
        var				len;

        len = magVector2d(vector);
        if (len == 0)
            return (out);
        out[0] = vector[0] / len;
        out[1] = vector[1] / len;
        return (out);
    }
	*/
    function						normalize2d(out, vector)
    {
        var				len;

        len = magVector2d(vector);
        if (len == 0)
            return (out);
        out[0] = vector[0] / len;
        out[1] = vector[1] / len;
        return (out);
    }

    /* Bresenham */
	/* // JAVA
    //static private void plotLineLow(Bitmap surface, int color, int width, int height, int x0, int y0, int x1, int y1) {
    static private void plotLineLow(int[] surface, int color, int width, int height, int x0, int y0, int x1, int y1)
    {
        int dx;
        int dy;
        int yi;
        int D;
        int y;

        dx = x1 - x0;
        dy = y1 - y0;
        yi = 1;
        if (dy < 0)
        {
            yi = -1;
            dy = -dy;
        }
        D = (2 * dy) - dx;
        y = y0;
        for (int x = x0; x < x1; x++)
        {
            putPixel(surface, x, y, width, height, color);
            if (D > 0)
            {
                y = y + yi;
                D = D + (2 * (dy - dx));
            }
            else
                D = D + 2 * dy;
        }
    }*/

	// JS
	function		plotLineLow(surface, color, width, height, x0, y0, x1, y1)
    {
        var dx;
        var dy;
        var yi;
        var D;
        var y;

        dx = x1 - x0;
        dy = y1 - y0;
        yi = 1;
        if (dy < 0)
        {
            yi = -1;
            dy = -dy;
        }
        D = (2 * dy) - dx;
        y = y0;
		var x = x0;
        while (++x < x1)
        {
            putPixel(surface, x, y, width, height, color);
            if (D > 0)
            {
                y = y + yi;
                D = D + (2 * (dy - dx));
            }
            else
                D = D + 2 * dy;
        }
    }

    //static private void plotLineHigh(Bitmap surface, int color, int width, int height, int x0, int y0, int x1, int y1)
	/* // JAVA
    static private void plotLineHigh(int[] surface, int color, int width, int height, int x0, int y0, int x1, int y1)
    {
        int dx;
        int dy;
        int xi;
        int D;
        int x;

        dx = x1 - x0;
        dy = y1 - y0;
        xi = 1;
        if (dx< 0)
        {
            xi = -1;
            dx = -dx;
        }
        D = (2 * dx) - dy;
        x = x0;
        for (int y = y0; y < y1; y++)
        {
            putPixel(surface, x, y, width, height, color);
            if (D > 0)
            {
                x = x + xi;
                D = D + (2 * (dx - dy));
            }
            else
                D = D + 2 * dx;
        }
    }*/

	// JS
    function			plotLineHigh(surface, color, width, height, x0, y0, x1, y1)
    {
        var dx;
        var dy;
        var xi;
        var D;
        var x;

        dx = x1 - x0;
        dy = y1 - y0;
        xi = 1;
        if (dx < 0)
        {
            xi = -1;
            dx = -dx;
        }
        D = (2 * dx) - dy;
        x = x0;
		var y = y0
        while (++y < y1)
        {
            putPixel(surface, x, y, width, height, color);
            if (D > 0)
            {
                x = x + xi;
                D = D + (2 * (dx - dy));
            }
            else
                D = D + 2 * dx;
        }
    }

    //static public void drawLine(Bitmap surface, int width, int height, int color, int x0, int y0, int x1, int y1)
	/* // JAVA
    static public void drawLine(int[] surface, int width, int height, int color, int x0, int y0, int x1, int y1)
    {
        if (Math.abs(y1 - y0) < Math.abs(x1 - x0))
        {
            if (x0 > x1)
                plotLineLow(surface, color, width, height, x1, y1, x0, y0);
            else
                plotLineLow(surface, color, width, height, x0, y0, x1, y1);
        }
        else
        {
            if (y0 > y1)
                plotLineHigh(surface, color, width, height, x1, y1, x0, y0);
            else
                plotLineHigh(surface, color, width, height, x0, y0, x1, y1);
        }
    }*/
	
	// JAVA
	/*
    static public void drawLine(int[] surface, int width, int height, int color, int x0, int y0, int x1, int y1)
    {
        if (Math.abs(y1 - y0) < Math.abs(x1 - x0))
        {
            if (x0 > x1)
                plotLineLow(surface, color, width, height, x1, y1, x0, y0);
            else
                plotLineLow(surface, color, width, height, x0, y0, x1, y1);
        }
        else
        {
            if (y0 > y1)
                plotLineHigh(surface, color, width, height, x1, y1, x0, y0);
            else
                plotLineHigh(surface, color, width, height, x0, y0, x1, y1);
        }
    }
	*/

	// JS
	function			drawLine(surface, width, height, color, x0, y0, x1, y1)
    {
        if (Math.abs(y1 - y0) < Math.abs(x1 - x0))
        {
            if (x0 > x1)
                plotLineLow(surface, color, width, height, x1, y1, x0, y0);
            else
                plotLineLow(surface, color, width, height, x0, y0, x1, y1);
        }
        else
        {
            if (y0 > y1)
                plotLineHigh(surface, color, width, height, x1, y1, x0, y0);
            else
                plotLineHigh(surface, color, width, height, x0, y0, x1, y1);
        }
    }

    //static public void putPixel(Bitmap surface, int x, int y, int width, int height, int color)
	// JAVA
	/*
    static public void putPixel(int[] surface, int x, int y, int width, int height, int color)
    {
            //y = x;
            //x = width - x + 1;
        if (x < 0 || y < 0 || x >= width || y >= height)
            return ;
        //surface.setPixel(x, y, color);
        surface[y * width + x] = color;
    }
	*/

	function		putPixel(surface, x, y, width, height, color)
    {
        if (x < 0 || y < 0 || x >= width || y >= height)
            return ;
		surface[y * width + x] = color;
    }
}
