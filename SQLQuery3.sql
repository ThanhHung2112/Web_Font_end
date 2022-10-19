	if(exists(select * from sys.objects where name = 'fn_RevenueByAllMonth'))
			drop function fn_RevenueByAllMonth
		go

		CREATE FUNCTION fn_RevenueByAllMonth
		(
			@year int
		)
		RETURNS @tbl table
		(
			Month int primary key,
			revenue money default(0)
		)
		AS
		BEGIN
			insert into @tbl(Month,revenue)
			select MONTH(o.OrderDate) as MOnth,
				sum(od.Quantity * od.salePrice) as Revenue
			from Orders as o
				join OrderDetails as od on o.OrderId = od.OrderId
			where year(o.OrderDate) = @year
			group by MONTH(o.OrderDate)
			
			declare @month int = 1;
			while (@month <= 12)
				begin
					if(not exists (select * from @tbl where MONTH = @month))
						insert into @tbl(month) values (@month)

					set @month += 1;
			RETURN;
		END
		GO