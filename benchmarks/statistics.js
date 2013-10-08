/****************************************************************************************************
JavaScript Math and Statistics Library

@file		pseudoMathStats.js
@version	1.0
@author 	Paul Ellis
@url        http://code.google.com/p/pseudosavant
@copyright 	Copyright 2010, Paul Ellis
@license    BSD
****************************************************************************************************/


/****************************************************************************************************
Calculates the Standard Deviation of an array
****************************************************************************************************/
Array.prototype.stdDev = function ()
{
    // Calculate Mean
    var mean = this.mean();

    var length = this.length;

    // Calculate Variance
    for (var i = 0, sumOfSquares = 0; i < length; i++)
    {
        sumOfSquares += Math.pow(this[i] - mean, 2);
    }
    var stdDev = Math.sqrt(sumOfSquares / length);

    return stdDev;
}


/****************************************************************************************************
Calculates the Variance of an array
****************************************************************************************************/
Array.prototype.variance = function ()
{
    // Calculate Mean
    var mean = this.mean();

    var length = this.length;

    // Calculate Variance
    for (var i = 0, sumOfSquares = 0; i < length; i++)
    {
        sumOfSquares += Math.pow(this[i] - mean, 2);
    }
    var variance = sumOfSquares / length;

    return variance;
}


/****************************************************************************************************
Sums all values in an array
****************************************************************************************************/
Array.prototype.sum = function ()
{
    for (var i = 0, length = this.length, sum = 0; i < length; sum += this[i++]);
    return sum;
}


/****************************************************************************************************
Calculates the arithmetic mean of an array
****************************************************************************************************/
Array.prototype.mean = function ()
{
    for (var i = 0, length = this.length, sum = 0; i < length; sum += this[i++]);
    var mean = sum / length;
    return mean;
}


/****************************************************************************************************
Returns the highest numeric value of an array
****************************************************************************************************/
Array.prototype.max = function ()
{
  return this.reduceRight(function(i,j){if(j<i){return i}else{return j} });
}


/****************************************************************************************************
Returns the lowest numeric value of an array
****************************************************************************************************/
Array.prototype.min = function ()
{
  return this.reduceRight(function(i,j){if(j>i){return i}else{return j} });
}


/****************************************************************************************************
Calculates the median of an array
****************************************************************************************************/
Array.prototype.median = function ()
{
    var length = this.length;

    if (length % 2 == 1) // Odd
    {
        var middle = Math.floor(length / 2);
        var median = this.sortNumber()[middle];
    }
    else // Even
    {
        var middle = length / 2;
        var sorted = this.sortNumber();
        var median = (sorted[middle-1] + sorted[middle]) / 2;
    }
    return median;
}


/****************************************************************************************************
Returns the array sorted ascendingly, or decendingly if sortNumber(true).
****************************************************************************************************/
Array.prototype.sortNumber = function (invert)
{
    if (invert == true) // Decending
    {
      return this.slice().sort(function (a, b) { return a - b }).reverse(); // Using reverse() is faster than b - a.
    }
    else // Ascending, default
    {
      return this.slice().sort(function (a, b) { return a - b });
    }
}


/****************************************************************************************************
Returns an object containing the most common stats for the array.
****************************************************************************************************/
Array.prototype.summarize = function summarize (places) {
  if (!this.length) { return { error: "no values" }; }
  return {
    max: fixedDecimal(this.max(), places),
    median: fixedDecimal(this.median(), places),
    min: fixedDecimal(this.min(), places),
    mean: fixedDecimal(this.mean(), places),
    stdDev: fixedDecimal(this.stdDev(), places),
    sample_size: this.length,
  };
};


var fixedDecimal = function fixedDecimal (num, numOfDec) {
	var pow10s = Math.pow( 10, numOfDec || 0 );
	return ( numOfDec ) ? Math.round( pow10s * num ) / pow10s : num;
};


/****************************************************************************************************
Lower tail quantile for standard normal distribution function.

Written by Alankar Misra (alankar@digitalsutras.com)
Algorithm by Peter John Acklam (pjacklam@online.no, http://home.online.no/~pjacklam)
****************************************************************************************************/
function normsinv(p)
{
    // Coefficients in rational approximations
    var a = new Array(-3.969683028665376e+01, 2.209460984245205e+02,
                      -2.759285104469687e+02, 1.383577518672690e+02,
                      -3.066479806614716e+01, 2.506628277459239e+00);

    var b = new Array(-5.447609879822406e+01, 1.615858368580409e+02,
                      -1.556989798598866e+02, 6.680131188771972e+01,
                      -1.328068155288572e+01);

    var c = new Array(-7.784894002430293e-03, -3.223964580411365e-01,
                      -2.400758277161838e+00, -2.549732539343734e+00,
                      4.374664141464968e+00, 2.938163982698783e+00);

    var d = new Array(7.784695709041462e-03, 3.224671290700398e-01,
                       2.445134137142996e+00, 3.754408661907416e+00);

    // Define break-points.
    var plow = 0.02425;
    var phigh = 1 - plow;

    // Rational approximation for lower region:
    if (p < plow)
    {
        var q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    // Rational approximation for upper region:
    if (phigh < p)
    {
        var q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    // Rational approximation for central region:
    var q = p - 0.5;
    var r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}




