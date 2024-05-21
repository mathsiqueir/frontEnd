#include <stdio.h>;

// vetor
int dados[5];

// matriz
float matriz[2][3];

// registro
struct fraction
{
	int numerator;
	int denominator;
	float value;
};

int main(){
	struct fraction metade;
	metade.numerator = 1;		// atribui valor ao elemento numerator
	metade.denominator = 2; // atribui valor ao elemento denominator
	metade.value = metade.numerator / metade.denominator;
	return 0
};

//ponteiros





