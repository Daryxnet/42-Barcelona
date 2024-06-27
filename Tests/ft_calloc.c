/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_calloc.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dagarmil <dagarmil@student.42barcelon      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/06/27 16:10:01 by dagarmil          #+#    #+#             */
/*   Updated: 2024/06/27 20:19:12 by dagarmil         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"
#include <unistd.h>

void	print_hex(unsigned char nbr)
{
	char	f_nbr;
	char	s_nbr;
	char	*list;
	list = "0123456789abcdef";
	f_nbr = nbr / 16;
	f_nbr = *(list + f_nbr);
	s_nbr = nbr % 16;
	s_nbr = *(list + s_nbr);
	write(1, "\\", 1);
	write(1, &f_nbr, 1);
	write(1, &s_nbr, 1);
}
void	imprimir(char *str, size_t m)
{
	size_t	i;

	i = 0;
	while (i < m)
	{
		if (str[i] >= ' ' && str[i] <= '~')
			write(1, &str[i], 1);
		else
			print_hex(str[i]);
		i++;
	}
	return ;
}

void	*ft_calloc(size_t nmemb, size_t size)
{
	void	*pnt;

	pnt = (void *)malloc(nmemb * size);
	if (!pnt)
		return (NULL);
	ft_memset(pnt, '1', 8);
	imprimir(pnt, 2 * sizeof(int));
	write(1, "\n", 1);
	ft_bzero(pnt, (nmemb * size));
	return (pnt);
}

int	main()
{
	char	*a;

	a = (char *)ft_calloc(2, sizeof(int));
	imprimir(a, 2 * sizeof(int));
	return (0);
}
